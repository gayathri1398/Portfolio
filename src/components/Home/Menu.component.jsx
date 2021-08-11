import { Menu } from '@headlessui/react';

export default function MyDropdown() {
  return (
    <Menu >
      <Menu.Button>Home</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              About
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
             Projects
            </a>
          )}
        </Menu.Item>
       
      </Menu.Items>
    </Menu>
  )
}