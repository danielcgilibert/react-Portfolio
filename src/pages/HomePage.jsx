import splitbee from '@splitbee/web';
import Aos from 'aos';
import { useEffect } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Footer } from '../components/Footer';
import { Link } from '../components/Link';
import { LinksMobile } from '../components/LinksMobile';
import { ListProject } from '../components/ListProject';
import { ListTags } from '../components/ListTags';
import imageProfile from '/img/profile.jpeg';

export const HomePage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className=" dark:bg-dark dark:text-white lg:w-7/12  lg:mx-auto lg:shadow-xl lg:shadow-slate-300 lg:rounded-lg py-5 ">
        <section className="grid sm:text-centergrid lg:gap-12 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 grid-cols-auto  grid-rows-auto  mx-10 my-8 ">
          <div className="lg:row-span-3 sm:col-span-2  lg:col-span-1  flex lg:justify-center justify-start ">
            <img
              className="lg:w-80 md:w-64 sm:w-64 sm:mx-auto    lg:mr-auto border-neutral-200 w-12/12 max-h-full border-t-8  shadow-md shadow-slate-400  rounded-2xl"
              src={imageProfile}
            />
          </div>

          <article className="sm:col-span-2  sm:text-center  lg:col-span-1 lg:row-span-3 lg:flex lg:flex-col lg:justify-center lg:mb-0 lg:text-left   mb-20">
            <h1 className="lg:text-8xl text-4xl font-medium mt-4 sm:text-center lg:text-left text-left">
              Hola!
            </h1>
            <p className="lg:text-2xl mt-2 text-xl leading-8 font-light lg:px-2">
              Soy Daniel web developer, tengo experiencia tanto en front-End como en Back-end
            </p>
            <p className="lg:text-xl mt-2 text-xl leading-8 font-light lg:px-2">
              Especializándome en el área front-end.
            </p>
            <div className="hidden mt-5 sm:justify-center lg:justify-start sm:flex  flex-wrap gap-2  ">
              <Link
                onClick={() => splitbee.track('Github')}
                href="https://github.com/danielcgilibert">
                <BsGithub size={20} />
                Github
              </Link>
              <Link onClick={() => splitbee.track('CV')} href="../assets/cv.pdf" download>
                <BsFillFileEarmarkTextFill size={20} />
                CV
              </Link>
              <Link
                onClick={() => splitbee.track('Linkedin')}
                href="https://www.linkedin.com/in/danielcarmonagilibert/">
                <BsLinkedin size={20} />
                Linkedin
              </Link>
              <Link onClick={() => splitbee.track('Email')} href="mailto:danielcgilibert@gmail.com">
                <AiTwotoneMail size={20} /> Email
              </Link>
            </div>
          </article>

          <article className="sm:col-span-2 sm:mt-12 lg:mt-0  sm:text-center lg:text-left  xl:col-span-1">
            <h1 className="text-4xl font-medium mt-4">Mi trayectoria hasta ahora</h1>
            <p className="mt-2  text-xl leading-8 font-light">
              Siempre preparado para adaptarme a las nuevas tecnologías, he tenido la oportunidad de
              trabajar en aplicaciones con soporte a grandes cantidades de usuarios.
            </p>
            <p className="mt-2  text-xl leading-8 font-light">
              También en el área e-commerce con grandes cantidades de clientes.
            </p>
            <p className="mt-2  text-xl leading-8 font-light">
              Siempre con el objetivo de dar una buena experiencia de usuario al cliente con un
              producto de calidad.
            </p>

            <p className="mt-2 text-gray-500 text-sm leading-8 font-light">
              Para más información en la parte superior está mi cv.
            </p>
          </article>

          <article
            className=" sm:col-span-2 xl:col-span-1 flex justify-start sm:justify-center
             flex-wrap gap-2 mt-5 mb-20">
            <ListTags />
          </article>

          <article className="flex flex-col gap-5 sm:col-span-2 lg:col-span-2 ">
            <h1 className="text-4xl font-medium mt-4 sm:text-center text-left">
              Algunos de mis proyectos
              <p className="mt-2 text-gray-500 text-sm leading-8 font-light">
                Si quieres ver todos los proyectos, visitar mi cuenta de{' '}
                <a className="border-b-2 border-blue-200" href="https://github.com/danielcgilibert">
                  GitHub{' '}
                </a>
              </p>
            </h1>
            <ListProject />
          </article>
        </section>
        <LinksMobile />
      </div>
      <Footer />
    </>
  );
};
