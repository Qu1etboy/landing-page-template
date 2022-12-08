import Container from "../components/Container";
import Image from "next/image";

const About = () => {
  return (
    <Container title="About - Landing page template">
      <div className="container mx-auto px-6 my-24">
        <h1 className="text-3xl font-bold mb-10">About us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aut illo, pariatur distinctio accusantium expedita voluptate
          blanditiis delectus nemo facilis provident sapiente dicta mollitia eos
          officiis quidem necessitatibus! Veniam, tempora. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam aut illo, pariatur
          distinctio accusantium expedita voluptate blanditiis delectus nemo
          facilis provident sapiente dicta mollitia eos officiis quidem
          necessitatibus! Veniam, tempora. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam aut illo, pariatur distinctio
          accusantium expedita voluptate blanditiis delectus nemo facilis
          provident sapiente dicta mollitia eos officiis quidem necessitatibus!
          Veniam, tempora.
        </p>
        <h1 className="text-3xl font-bold mb-10 mt-12 ">Meet the CEO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="CEO"
              width={400}
              height={700}
              className="mx-auto rounded-md"
            />
            <p className="text-center p-3 text-gray-800 italic">CEO John Doe</p>
          </div>
          <p className="p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aut illo, pariatur distinctio accusantium expedita voluptate
            blanditiis delectus nemo facilis provident sapiente dicta mollitia
            eos officiis quidem necessitatibus! Veniam, tempora. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quibusdam aut illo,
            pariatur distinctio accusantium expedita voluptate blanditiis
            delectus nemo facilis provident sapiente dicta mollitia eos officiis
            quidem necessitatibus! Veniam, tempora. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam aut illo, pariatur
            distinctio accusantium expedita voluptate blanditiis delectus nemo
            facilis provident sapiente dicta mollitia eos officiis quidem
            necessitatibus! Veniam, tempora.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
