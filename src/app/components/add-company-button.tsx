'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
// import CompanyFormModal from './company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  // ssr: false,
  loading: () => <h1 style={{color: "tomato", fontSize: "40px"}}>LOADING</h1>
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={() => setShow(false)}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}