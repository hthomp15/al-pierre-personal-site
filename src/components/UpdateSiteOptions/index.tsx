import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function UpdateSiteOptions() {

  const options: Array<string> = [
    'Add Article',
    'Update Article',
    'Add Category',
    'Update Category',
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  console.log(selectedOption);

  return (
    <RadioGroup value={selectedOption} onChange={setSelectedOption}>
      <RadioGroup.Label className="flex justify-center text-base font-semibold leading-6 text-gray-900 xs:width-max">
        Select an option
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-4 text-center sm:gap-x-4">
        {options.map((option, index) => (
          <RadioGroup.Option
            key={`${option}-${index}`}
            value={option}
            className={({ active }) =>
              classNames(
                active ? 'border-indigo-600 ring-2 ring-indigo-600' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              console.log("checked ", checked, "active ", active),
              <>
                <span className="flex flex-1 justify-center">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {option}
                    </RadioGroup.Label>
                  </span>
                </span>
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-600' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}