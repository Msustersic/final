export function commentsToRender(data) {

   let items = "";

   if (!data) {
      console.log("la lista de comentarios recibidos se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let pattern = `
         <li>
         <article>
            <!-- <p>${item.contactDate}</p> -->
            <p>${item.contactName}</p>
            <p>${item.contactComment}</p>
         </article>
         </li> `;
      items += pattern;
   });

   return items;
}