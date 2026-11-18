import GitHubIcon from '@icon/mcp-github.svg';
import CrmIcon from '@icon/system/regular/building-office.svg';
import CalendarIcon from '@icon/system/regular/calendar.svg';
import RoutinesIcon from '@icon/system/regular/clock-clockwise.svg';
import DatabaseIcon from '@icon/system/regular/database.svg';
import MailIcon from '@icon/system/regular/envelope.svg';
import DocsIcon from '@icon/system/regular/file.svg';
import DriveIcon from '@icon/system/regular/folder-simple.svg';
import LinkIcon from '@icon/system/regular/link.svg';
import TasksIcon from '@icon/system/regular/list-checks.svg';
import CallsIcon from '@icon/system/regular/phone-call.svg';
import CanvasIcon from '@icon/system/regular/shapes.svg';
import AgentsIcon from '@icon/system/regular/sparkle.svg';
import TagsIcon from '@icon/system/regular/tag.svg';
import SpreadsheetsIcon from '@icon/wide-spreadsheet.svg';
import SkillsIcon from '@phosphor/blueprint.svg';
import SnippetsIcon from '@phosphor/brackets-curly.svg';
import ChatIcon from '@phosphor/chats-circle.svg';
import FormsIcon from '@phosphor/clipboard-text.svg';
import { For, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import './product-mention.css';

const products = [
  { name: 'Rox Mail', href: '/email', icon: MailIcon },
  { name: 'Rox CRM', href: '/crm', icon: CrmIcon },
  { name: 'Rox Chat', href: '/channels', icon: ChatIcon },
  { name: 'Rox Tasks', href: '/tasks', icon: TasksIcon },
  { name: 'Rox Docs', href: '/documents', icon: DocsIcon },
  { name: 'Rox Calls', href: '/calls', icon: CallsIcon },
  { name: 'Rox Agents', href: '/agents', icon: AgentsIcon },
  { name: 'Rox Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Rox Databases', href: '/databases', icon: DatabaseIcon },
  { name: 'Rox Booking Links', href: '/booking-links', icon: LinkIcon },
  { name: 'Rox Drive', href: '/drive', icon: DriveIcon },
  { name: 'Rox Forms', href: '/forms', icon: FormsIcon },
  { name: 'Rox Spreadsheets', href: '/spreadsheets', icon: SpreadsheetsIcon },
  { name: 'Rox Canvas', href: '/canvas', icon: CanvasIcon },
  { name: 'Rox Routines', href: '/routines', icon: RoutinesIcon },
  { name: 'Rox Skills', href: '/skills', icon: SkillsIcon },
  { name: 'Rox Snippets', href: '/snippets', icon: SnippetsIcon },
  { name: 'Rox GitHub', href: '/github', icon: GitHubIcon },
  { name: 'Rox Tags', href: '/docs/product/tagging', icon: TagsIcon },
];
const productNames = new RegExp(
  `(${products.map((product) => product.name).join('|')})`,
  'g'
);

/**
 * Explicit product names in section copy become navigable product mentions.
 * Punctuation after a name stays on the mention's line.
 */
export function ProductCopy(props: { text: string }) {
  const parts = () => {
    const pieces = props.text.split(productNames);
    return pieces.map((text, index) => {
      const product = products.find((item) => item.name === text);
      if (product) {
        const after = pieces[index + 1]?.match(/^[.,;:!?)’]+/)?.[0] ?? '';
        return { product, text: after };
      }
      // The punctuation was drawn with the mention before it.
      const led =
        index > 0 && products.some((item) => item.name === pieces[index - 1]);
      return { text: led ? text.replace(/^[.,;:!?)’]+/, '') : text };
    });
  };
  return (
    <For each={parts()}>
      {(part) => (
        <Show when={part.product} fallback={part.text}>
          {(product) => (
            <span class="product-mention-line">
              <a class="product-mention" href={product().href}>
                <Dynamic component={product().icon} aria-hidden="true" />
                <span>{product().name.replace('Rox ', '')}</span>
              </a>
              {part.text}
            </span>
          )}
        </Show>
      )}
    </For>
  );
}
