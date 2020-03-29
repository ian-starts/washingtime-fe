import React from 'react';
import Link from "next/link";

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero--container">
                <div className="hero--content">
                    <div className="flex flex-1 flex-col md:justify-center lg:justify-center xl:justify-center">
                        <h1
                            className="hero--heading">
                            Help de helpers!
                        </h1>
                        <p className="hero--text">
                            Help de helpers is een initiatief om mensen, organisaties en andere initiatieven te
                            verbinden en te ondersteunen, zodat we elkaar nóg beter kunnen helpen.
                            <br/>
                            <br/>
                            Voeg hieronder een iniatief toe die baat heeft bij betere samenwerking!
                            <br/>
                            <br/>
                            Het is ongelooflijk om te zien hoeveel initiatieven er worden genomen om hulp te bieden
                            tijdens deze pandemie. Zó veel, dat het nu al moeilijk wordt om je weg hierin te vinden.
                            Daarom willen we zo veel mogelijk initiatieven in Nederland inventariseren, zodat we de
                            hulpvragen en hulp aanbiedingen beter kunnen matchen. Ons doel is:
                            <br/><br/>
                            <ul>
                                <li>1. Zo veel mogelijk initiatieven in kaart te brengen en deze te organiseren.</li>
                                <li>2. Met andere initiatieven in contact komen om elkaar te kunnen helpen en
                                    versterken.
                                </li>
                            </ul>
                            <br/>
                            Start met helpen door #HelpDeHelpers zo snel en zo veel mogelijk te delen!
                            Ken je een hulp initiatief voor boodschappen, bijles of een andere vorm van hulp
                            organisatie? Voeg een initiatief toe. Samen zorgen we ervoor dat we alle hulp zo
                            goed mogelijk kunnen organizeren, vanuit Code for NL, in samenwerking met jullie allemaal.
                            Wil je meehelpen met Code for NL? <a className="link" href="https://doemee.codefor.nl">doemee.codefor.nl</a>
                        </p>
                        <div className="flex flex-wrap mt-2">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScEK83SlUdbTdw6SYqiqRXlLMLbSas3_MYBZqffElVSiPwISQ/viewform">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Voeg een initiatief toe</span>
                                </div>
                            </a>
                            <a href="https://doemee.codefor.nl">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Join de CodeForNL Slack</span>
                                </div>
                            </a>
                            <a href="https://heldnodig.nl">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Ik wil nu iets doen!</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                  .link {
                       @apply underline
                    }
                  .hero{
                    @apply top-0 left-0 bg-secondary min-h-full flex flex-1 self-stretch;
                  }
                  .hero--container{
                    @apply flex flex-1 flex-row flex-wrap-reverse justify-end pt-10 h-full
                  }
                  .hero--content {
                    @apply flex pl-12 pr-2 flex-1 self-center mb-10 min-w-20
                  }
                  .hero--heading {
                    @apply text-2xl my-5 font-sans leading-tight font-semibold text-white
                  }
                  .hero--text {
                    @apply text-lg my-5 mr-5 font-sans leading-tight text-white p-4
                  }
                  .button{
                    @apply rounded-full px-5 py-2
                  }
                  .button-cta{
                    transition: transform .3s ease,-webkit-transform .3s ease,box-shadow .4s ease;
                    @apply bg-primary ml-3 my-2
                  }
                  .button-cta:hover{
                    transform: translate(0px, -2px);
                    box-shadow: 0 0 9px 2px hsla(0, 0%, 0%, 0),0 6px 18px 2px rgba(0, 0, 0, 0.1);;
                  }
                  .button--text{
                    @apply self-center text-gray-800 font-sans font-hairline
                  }
                  @screen md {
                       .hero--heading {
                        @apply text-4xl
                      }
                      .hero--text {
                        @apply text-lg
                      }
                       .hero--content {
                        @apply mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
                  @screen lg {
                      .hero--heading {
                        @apply text-5xl
                      }
                      .hero--text {
                        @apply text-lg
                      }
                      .button--text{
                        @apply text-2xl
                      }
                      .hero--content {
                        @apply  mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
                  @screen xl {
                      .hero--heading {
                        @apply text-5xl
                      }
                      .hero--text {
                        @apply text-lg
                      }
                      .button-text{
                        @apply text-2xl
                      }
                      .hero--content {
                        @apply mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
            `}</style>
        </div>
    )
};

export default Hero