// import React from 'react'
// import { graphql, Link } from 'gatsby'
// import Layout from './Layout'
// import Arrow from './Arrow'
// import PaginationItem from './PaginationItem'

// const PostTemplate = ({data, pageContext}) => {

//   const { header, subheader, content } = data.processJson

//   return (
//     <Layout>
//       <div className='px-12'>
//         <header className='mb-8'>
//           <span className='block mb-12 text-primary text-3xl' aria-hidden>
//             0{pageContext.index}
//           </span>
//           <h1 className='mb-4 tracking-tighter'>{header}</h1>
//           <p className='italic text-gray'>{subheader}</p>
//           {console.log(data.processJson)}
//         </header>

//         {content}

//         <hr className='my-12 rotate-[-1deg] text-secondary
//                         mx-[-3rem]' />

//         {/* Pagination */}
//         <section className='grid grid-cols-[1fr_3rem_1fr]'>
//           {pageContext.next &&
//             <PaginationItem entry={pageContext.next}
//               direction='left'
//               className='self-end' />
//           }
//           <div className='relative self-center col-start-2' aria-hidden>
//             <span className='absolute border-b border-kumquat w-12 rotate-[30deg]' aria-hidden></span>
//             <span className='absolute border-b border-kumquat w-12 rotate-[-60deg]' aria-hidden></span>
//           </div>
//           {pageContext.prev &&
//             <PaginationItem entry={pageContext.prev}
//               direction='right'
//               className='self-start col-start-3' />
//           }
//         </section>
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ($id: String) {
//     processJson(id: {eq: $id}) {
//       header
//       subheader
//       content
//       heroImage
//     }
//   }
// `

// export default PostTemplate