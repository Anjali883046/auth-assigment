import { auth }
from "@/auth";

export default async function Dashboard(){

 const session =
 await auth();

 if(!session){

   return (
    <h1>
     Login Required
    </h1>
   );
 }

 return (
  <h1>
   Welcome Dashboard
  </h1>
 );

}