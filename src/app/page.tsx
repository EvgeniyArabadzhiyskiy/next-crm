import AddCompanyButton from '@/app/components/add-company-button';
import ServerCompoent from './components/server-component';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      {/* <ServerCompoent>
        Next Js
      </ServerCompoent> */}
    </main>
  );
}
