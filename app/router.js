if(
 session.user.role
 !== "admin"
){

 return Response.json(
  {
   error:"Forbidden"
  },
  {
   status:403
  }
 );

}