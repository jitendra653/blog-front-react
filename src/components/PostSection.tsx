import React from 'react';
import Card from './Card.tsx';
import { Link } from 'react-router-dom';

const PostSection: React.FC = () => (
  <section className="container mx-auto p-10">
    <div className='flex justify-between'>

<h2 className="text-3xl font-bold mb-6">Popular Post</h2>
<div>
<Link className="block py-2 px-4 rounded bg-purple-700 hover:bg-purple-600  md:hover:bg-transparent md:border md:border-purple-700 md:text-white md:hover:text-purple-600" to={'/blog'}>View All</Link>
</div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <div className="bg-white p-4 shadow-md">
        <img src="path-to-image" alt="post image" className="w-full h-48 object-cover mb-4"/>
        <h3 className="text-2xl font-semibold">Post Title</h3>
        <p className="text-gray-700">Brief description of the post.</p>
      </div> */}
      {/* Repeat similar blocks for more posts */}

{/* grid grid-cols-1 md:grid-cols-3 gap-6 */}

 
        <Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Travel"
          date="13 March 2023"
          title="8 Rules Of Travelling In Sea You Need To Know"
          description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs"
          link="#"
        />
        <Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Development"
          date="11 March 2023"
          title="How to build strong portfolio and get a Job in UI/UX"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from"
          link="#"
        />
        <Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Sports"
          date="10 March 2023"
          title="How to Be a Professional Footballer in 2023"
          description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive"
          link="#"
        />


<Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Travel"
          date="13 March 2023"
          title="8 Rules Of Travelling In Sea You Need To Know"
          description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs"
          link="#"
        />
        <Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Development"
          date="11 March 2023"
          title="How to build strong portfolio and get a Job in UI/UX"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from"
          link="#"
        />
        <Card
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
          category="Sports"
          date="10 March 2023"
          title="How to Be a Professional Footballer in 2023"
          description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive"
          link="#"
        />
      </div>






  </section>
);

export default PostSection;
