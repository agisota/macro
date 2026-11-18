import unittest
from unittest.mock import patch, sentinel

import transcriber


class TranscriberConfigurationTest(unittest.TestCase):
    def test_configures_groq_transcription(self):
        with (
            patch.object(
                transcriber.groq,
                "STT",
                return_value=sentinel.stt,
            ) as create_stt,
            patch.object(transcriber.Agent, "__init__", return_value=None) as init_agent,
        ):
            transcriber.Transcriber(
                participant_identity="participant-id",
                channel_id="channel-id",
                http_client=sentinel.http_client,
            )

        create_stt.assert_called_once()
        args, kwargs = create_stt.call_args
        self.assertEqual(args, ())
        self.assertEqual(kwargs["model"], "whisper-large-v3-turbo")
        self.assertEqual(kwargs["base_url"], transcriber.groq_api_base())
        self.assertTrue(kwargs["detect_language"])
        self.assertNotIn("api_key", kwargs)
        init_agent.assert_called_once_with(
            instructions="Transcribe user speech.",
            stt=sentinel.stt,
        )


if __name__ == "__main__":
    unittest.main()
