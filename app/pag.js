import { auth }
from "@/auth";

export default async function Admin(){

 const session =
 await auth();

 if(
  session?.user?.role
  !== "admin"
 ){

   return (
    <h1>
      Access Denied
    </h1>
   );

 }

 return (
  <h1>
   Admin Dashboard
  </h1>
 );

}