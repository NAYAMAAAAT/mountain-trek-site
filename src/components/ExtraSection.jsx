
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const ExtraSection = () => {
    return (
        <AnimationOnScroll animateIn="animate__bounceIn">
        <main class="animate__animated animate__fadeInLeft">
        <div class="md:mx-auto md:container px-4 dark:bg-gray-900">
        <div class="pt-10 md:pt-40">
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center pb-12">
                    <div class="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                        <div class="py-2 text-color">
                            <h1 role="heading"
                                class="text-2xl dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                               Discover the Wonders of Nature</h1>
                            <p role="contentinfo"
                                class="text-md dark:text-white lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                               Join us on an immersive journey through the most breathtaking landscapes, diverse ecosystems, and incredible wildlife. Whether you're a nature enthusiast, a budding photographer, or simply seeking tranquility, our website offers a treasure trove of resources and inspiration to help you deepen your connection with the great outdoors. Dive into our stunning galleries, insightful articles, and community events to experience the beauty and importance of nature like never before.</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                        <img class="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://images.unsplash.com/photo-1716902536193-ae684074e634?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A girl enjoying in sunlight" role="img" />
                        <div class="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                            <div class="flex items-center justify-between w-full sm:w-full mb-8">
                               <h2 class="text-2xl font-serif font-bold text-green-600">
                                Explore, Learn, and Connect with the Natural World
    
    </h2>

    
                    
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </main>
    </AnimationOnScroll>
    );
};

export default ExtraSection;