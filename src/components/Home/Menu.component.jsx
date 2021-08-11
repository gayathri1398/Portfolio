import { Menu } from '@headlessui/react';
import {FiChevronDown} from 'react-icons/fi';

export default function MyDropdown(classname) {
  return (
    <Menu>
      <Menu.Button>Home <FiChevronDown className="inline"/></Menu.Button>
      <Menu.Items className="flex flex-col gap-2">
        {/* Use the `active` render prop to conditionally style the active item. */}
        <Menu.Item className="mt-2">
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
             About
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
              Projects
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
             Skills
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
             Contact
            </a>
          )}
        </Menu.Item>
       
      </Menu.Items>
    </Menu>
  )
}

// import { Menu } from '@headlessui/react';

// export default function MyDropdown() {
//   return (
//     <Menu >
//       <Menu.Button>Home</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href="/account-settings"
//             >
//               About
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href="/account-settings"
//             >
//              Projects
//             </a>
//           )}
//         </Menu.Item>
       
//       </Menu.Items>
//     </Menu>
//   )
// }