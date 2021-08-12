import { Menu } from '@headlessui/react';
import {FiChevronDown} from 'react-icons/fi';

export default function MyDropdown(classname) {
  return (
    <Menu>
      <Menu.Button className="focus:outline-none">Home <FiChevronDown className="inline"/></Menu.Button>
      <Menu.Items className="flex flex-col gap-2 absolute z-10 mt-2 border-0 focus:outline-none rounded md:mt-4">
        {/* Use the `active` render prop to conditionally style the active item. */}
        <Menu.Item >
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-port-300 text-white' : 'bg-transparent text-white'
              }`}
              href="About"
            >
             About
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-port-300 text-white' : 'bg-transparent text-white'
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
                active ? 'bg-port-300 text-white' : 'bg-transparent text-white'
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
                active ? 'bg-port-300 text-white' : 'bg-transparent text-white'
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
