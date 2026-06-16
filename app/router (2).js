if(
 post.authorId
 !== session.user.id
){

 return Response.json(
  {
   error:"Not Allowed"
  },
  {
   status:403
  }
 );

}