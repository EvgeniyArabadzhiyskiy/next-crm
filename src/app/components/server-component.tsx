import { PropsWithChildren } from 'react';

export default function ServerCompoent({ children }: PropsWithChildren) {

    console.log("SERVER");
    
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
