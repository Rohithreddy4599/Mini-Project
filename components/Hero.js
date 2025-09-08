import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <Image 
          src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1754437507/vg1qafmy4wtc6rjut6wn.gif"
          alt="Mix and Match Tableware Set. Save up to 40%."
          width={1600}
          height={400}
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
    </section>
  );
};

export default Hero;