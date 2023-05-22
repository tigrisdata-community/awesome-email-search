'use client';

import MultiSelect from '@/components/multi-select';
import Row from '@/components/row';

export enum SearchEmailStatus {
  Sent = 'Sent',
  Delivered = 'Delayed',
  DeliveryDelayed = 'Delivery Delayed',
  Complained = 'Complained',
  Bounced = 'Bounced',
}

export default function Search() {
  const handleStatusFacetChange = (value: string[]) => {
    console.log(value);
  };

  return (
    <Row>
      <h1 className="text-lg pb-4">Search</h1>

      <form
        action="/api/email"
        method="POST"
        className="flex flex-col lg:flex-row gap-6 w-5/6 lg:w-4/6"
      >
        <input
          type="text"
          name="search"
          className="rounded-lg lg:grow bg-white text-left shadow-md focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-teal-300 sm:text-sm mt-2 text-slate-950 font-sans"
        />
        <MultiSelect
          onChange={handleStatusFacetChange}
          options={Object.values(SearchEmailStatus)}
        />
      </form>
    </Row>
  );
}
