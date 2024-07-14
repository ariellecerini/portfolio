---
title: Design System Token Strategy
type: portfolio
category: ui-ux-design
client: Paylocity
display: featured
position: Staff Designer 
role: Lead Designer & Design System Architect
tools: Figma
image: /projects/citrus-design-system/thumbnail.png
tags: design system
url: https://www.figma.com/proto/aImBvKBHCpKkCDgGFq1OeJ/Citrus-Tokens?page-id=0%3A1&type=design&node-id=21-2099&viewport=7343%2C1529%2C0.42&t=MUT4XmmYyAa1JpAo-1&scaling=scale-down&mode=design
link: https://www.figma.com/proto/aImBvKBHCpKkCDgGFq1OeJ/Citrus-Tokens?page-id=0%3A1&type=design&node-id=21-2099&viewport=7343%2C1529%2C0.42&t=MUT4XmmYyAa1JpAo-1&scaling=scale-down&mode=design
linkText: "View Presentation"
dateStart: March 2023
dateEnd: August 2023
media: UI/UX Design | Design System | UX Management 
featuredImage: /projects/citrus-design-system/featured-image.png
cModules: {
    moduleOne: {
        item: text, 
        header: "Objective",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12 backdrop-secondary",
        style: "padding: 40px 56px; border-radius: 16px;",

        inner: {     
            itemOne: {
                style: "font-size: 1.4rem; color: var(--color-primary-60); font-weight: 700;", 
                class: "padding-bottom-base padding-top-base",
                text: "create a robust token framework that enables the following:"
            },

            itemTwo: {
                style: "font-size: 1.15rem; color: var(--color-primary); font-weight: 400", 
                class: "padding-bottom-base",
                text: "citron styling as a form of design system adoption"
            },
            itemThree: {
                style: "font-size: 1.15rem; color: var(--color-primary); font-weight: 400", 
                class: "padding-bottom-base",
                text: "efficient updates and product evolution"
            },
            itemFour: {
                style: "font-size: 1.15rem; color: var(--color-primary); font-weight: 400", 
                class: "padding-bottom-base",
                text: "consistent styling throughout the system"
            },
            itemFive: {
                style: "font-size: 1.15rem; color: var(--color-primary); font-weight: 400", 
                class: "padding-bottom-base",
                text: "** bonus ** dark mode theming"
            }
                          
         }
    },

      moduleTwo: {
        item: text, 
        header: "Key Terms",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "",

        inner: {     
            itemOne: {
                style: "font-size: 1.1rem;", 
                class: "padding-bottom-base padding-top-base",
                text: "tokens: an explicit value that can be used within a programming language. Within design systems, they are used to standardize values for different design properties"
            },

            itemTwo: {
                style: "font-size: 1.1rem;", 
                class: "padding-bottom-base",
                text: "figma variables: equatable to tokens for development; they are identifiers used to standardize styling across a system"
            },
            itemThree: {
                style: "font-size: 1.1rem;",  
                class: "padding-bottom-base",
                text: "figma styles: equatable to class and ID styling for development; they are a series of style properties that can easily be applied to an element"
            },
            itemFour: {
                style: "font-size: 1.1rem;", 
                class: "padding-bottom-base",
                text: "alias: a token or Figma variable whose value is another token or variable"
            },
            itemFive: {
                style: "font-size: 1.1rem;", 
                class: "padding-bottom-base",
                text: "mode: a feature in Figma that allows you to ‘theme’ areas of the platform; a common example of this is ‘light’ and ‘dark’ modes"
            },
                          
         }
    },

    moduleThree: {
        item: text, 
        header: "Assessment of System ",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-bottom: 8px;",

    },

    moduleFour: {
            item: image,  
            header: "",
            class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
            image: "/projects/citrus-design-system/design-system-audit.png",
            style: "margin-top: 0px;"
        },

    moduleFive: {
        item: text, 
        header: " ",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",

        inner: {     
            itemOne: {
                style: "font-size: 1.1rem; padding-top: 8px; font-weight:700;", 
                class: "",
                text: "naming conventions"
            },
            itemTwo: {
                style: "font-size: 1.1rem",  
                class: "padding-bottom-base",
                text: "color tokens refer to specific color names rather than semantic use cases"
            },
            itemThree: {
                style: "font-size: 1.1rem; padding-top: 8px; font-weight:700;", 
                class: "",
                text: "architecture"
            },
            itemFour: {
                style: "font-size: 1.1rem",  
                class: "padding-bottom-base",
                text: "token architecture is flat, which does not allow for cascading updates and brand evolution"
            },
            itemFive: {
                style: "font-size: 1.1rem; padding-top: 8px; font-weight:700;", 
                class: "",
                text: "usage guidance"
            },
            itemSix: {
                style: "font-size: 1.1rem",  
                class: "padding-bottom-base",
                text: "token names lack clear use case and individual styles do not have descriptions to help designers understand when/where/how/why a specific style should be used resulting in inconsistent treatments for things like interactive states within the platform and component library "
            },
        }
    },
    moduleSix: {
        item: text, 
        header: "Considerations for Rearchitecting the System",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12 ",
        style: "margin-bottom: 8px;",

    },
    moduleSeven: {
        item: text, 
        header: " ",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",
            inner: {     
                itemZero: {
                    style: "font-size: 2.0rem; font-weight:700;", 
                    class: "",
                    text: "#1"
                },
                itemOne: {
                    style: "font-size: 1.2rem; font-weight:700;", 
                    class: "",
                    text: "consideration:"
                },
                itemTwo: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "mitigating the impact on paylocity customer"
                },
                itemThree: {
                    style: "font-size: 1.1rem;", 
                    class: "padding-bottom-base",
                    text: "how do we build a robust token system and begin to apply it to components incrementally without disrupting the end-user experience "
                },
                itemFour: {
                    style: "font-size: 1.2rem; font-weight:700;",  
                    class: "",
                    text: "strategic solution:"
                },
                itemFive: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "subtle changes"
                },
                itemSix: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "while building out the system there will need to be changes made to the colors, type sizing, and other design parameters; these changes should be subtle and unnoticeable to the untrained eye"
                },
                itemSeven: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "any drastic changes to the system should be assessed to determine if the risk out-weighs the reward"
                },
                itemEight: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "while updating colors and other values within the system, test screens should be used to verify the applicability of new values and subtlety of changes"
                },
            }
        },

    moduleEight: {
        item: text, 
        header: " ",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6x",
        style: "margin-top: 0px;",
            inner: {     
                 itemZero: {
                    style: "font-size: 2.0rem; font-weight:700;", 
                    class: "",
                    text: "#2"
                },
                itemOne: {
                    style: "font-size: 1.2rem; font-weight:700;", 
                    class: "",
                    text: "consideration:"
                },
                itemTwo: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "change management"
                },
                itemThree: {
                    style: "font-size: 1.1rem;", 
                    class: "padding-bottom-base",
                    text: "how do we mitigate risk and help designers and developers to adopt this new way of working"
                },
                itemFour: {
                    style: "font-size: 1.2rem; font-weight:700;",  
                    class: "",
                    text: "strategic solution:"
                },
                itemFive: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "communication"
                },
                itemSix: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "prior to asking teams to adopt the new tooling, time should be spent to educate teams on what the new system is, how it works, when they will be expected to adopt it, and—most importantly—why the changes are being made"
                },
                itemSeven: {
                    style: "font-size: 1.1rem; font-weight: 500;",  
                    class: "",
                    text: "removing barriers"
                },
                itemEight: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "an education strategy should be constructed to help teach designers and developers how to use the new tooling and what its benefits are"
                },
                itemNine: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "beta testing should be done with a small group of designers who have opted in to using the new tools to help gather feedback, so that we can improve upon the system prior to releasing it"
                },
            }
    },
    moduleNine: { 
        item: image, 
        header: "Token Path Throughout System",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        image: "/projects/citrus-design-system/token-path-filled.png",
        style: ""
    },
    moduleTen: { 
        item: image, 
        header: "Foundational Theme Tokens",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        image: "/projects/citrus-design-system/foundations.png",
        style: ""
    },

     moduleEleven: { 
        item: image, 
        header: "Token Naming Conventions",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        image: "/projects/citrus-design-system/token-naming.png",
        style: ""
    },
     moduleTwelve: {
        item: text, 
        header: "Design System Designers Building in Figma",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-bottom: 8px;",

    },

    moduleThirteen: { 
        item: image, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        image: "/projects/citrus-design-system/modes.png",
        style: ""
    },

     moduleFourteen: { 
        item: image, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        image: "/projects/citrus-design-system/modes-ex.png",
        style: ""
    },

    moduleFifteen: { 
        item: image, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        image: "/projects/citrus-design-system/building-ex.png",
        style: ""
    },
    moduleSeventeen: {
        item: text, 
        header: "All Designers Building in Figma",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-bottom: 0;",
            inner: {     
                itemOne: {
                    style: "font-size: 1.1rem;", 
                    class: "padding-top-base padding-bottom-base",
                    text: "Designers consuming the design system have two options for applying citron tokens to their designs. This is similar to how, in development, a design system’s styling can be applied using css variables or using classes that are intended to define a single property. This helps to overcome Figma's limitation of not being able to see variable descriptions when referencing them."
                }
            }
    },
    moduleEighteen: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-top: 0px; margin-bottom: 0;",
            inner: {     
                 itemZero: {
                    style: "font-size: 1.4rem; font-weight:700;", 
                    class: "",
                    text: "Option #1: Theme Tokens"
                },
                itemOne: {
                    style: "font-size: 1.1rem;", 
                    class: "",
                    text: "design tokens built using figma’s new variable feature"
                },
            }
    },
  
    moduleNineteen: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",
            inner: {     
                itemTwo: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "",
                    text: "Features"
                },
                itemThree: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "padding-top-base",
                    text: "scoped properties"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "clearly defining what a color or numerical value can be used to define helps to minimize misuse"
                },
                itemFive: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "aliases"
                },
                itemSix: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "variables can equal other variables, which allows for cascading value changes within the system"
                },
                itemSeven: {
                    style: "font-size: 1.1rem; font-weight: 500;",  
                    class: "",
                    text: "modes"
                },
                itemEight: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "allows for easily switching context of components when building out components, minimizing duplicate efforts"
                },
                itemNine: {
                    style: "font-size: 1.1rem; font-weight: 500;",  
                    class: "",
                    text: "padding/spacing"
                },
                itemTen: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "using variables to define border radii, padding, and spacing helps to ensure consistency throughout platform design"
                },
            }
    },
    moduleTwenty: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",
            inner: {     
                itemTwo: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "",
                    text: "Limitations / Features Not Yet Available"
                },
                itemThree: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "padding-top-base",
                    text: "token descriptions"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "while you can add descriptions to tokens, those tokens are not visible outside of the Figma collection that you define them in"
                }
            }
    },
     moduleTwentyone: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-top: 0px; margin-bottom: 0;",
            inner: {     
                 itemZero: {
                    style: "font-size: 1.4rem; font-weight:700;", 
                    class: "",
                    text: "Option #2: Theme Styles"
                },
                itemOne: {
                    style: "font-size: 1.1rem;", 
                    class: "",
                    text: "reusable styles, for colors styles equal color variables"
                },
            }
    },
  
    moduleTwentytwo: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",
            inner: {     
                itemTwo: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "",
                    text: "Features"
                },
                itemThree: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "padding-top-base",
                    text: "style descriptions"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "having descriptions containing the intended use case for a style property available for designers when referencing a color can help minimize misuse and confusion"
                },
                itemFive: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "text styles"
                },
                itemSix: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "reusable text styles helps to ensure consistent type treatment within the product, improves designer efficiency during the prototype building process, and enables systemwide style updates"
                },
                itemSeven: {
                    style: "font-size: 1.1rem; font-weight: 500;",  
                    class: "",
                    text: "mixed colors"
                },
                itemEight: {
                    style: "font-size: 1.1rem",  
                    class: "padding-bottom-base",
                    text: "creating color styles that equal multiple hex values or variables allows designers to easily apply modern interaction styling techniques to their applications and ensures consistent treatment of interaction states"
                }
            }
    },
    moduleTwentythree: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top: 0px;",
            inner: {     
                itemTwo: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "",
                    text: "Limitations / Features Not Yet Available"
                },
                itemThree: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "padding-top-base",
                    text: "alias"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "styles can be made from tokens (variables), but they cannot be made from other styles"
                }
            }
    },
     moduleTwentyfour: {
        item: text, 
        header: "Current Engineer Implementation",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "margin-bottom: 0;",

    },
    moduleTwentyfive: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top:0; ",
            inner: {     
                itemOne: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "padding-bottom-base",
                    text: "Overview"
                },
                itemTwo: {
                    style: "font-size: 1.1rem;", 
                    class: "padding-bottom-base",
                    text: "front-end style strategy: built using CSS-in-JS"
                },
                itemThree: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "global classes can be created, but only as a last resort"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "",
                    text: "Current system architecture requires the tokens to be flattened and consumed as a JSON file, as a result, we are unable to easily apply modern design system conventions within our system."
                }
            }
    },
    moduleTwentysix: {
        item: text, 
        header: "",
        class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: "margin-top:0;",
            inner: {     
                itemOne: {
                    style: "font-size: 1.2rem; font-weight:700; border-bottom: 2px solid; padding-bottom: 8px;", 
                    class: "padding-bottom-base",
                    text: "Current Pain Points"
                },
                itemTwo: {
                    style: "font-size: 1.1rem; font-weight: 500;", 
                    class: "",
                    text: "barrier for entry/learning curve"
                },
                itemThree: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "a way to enable teams to easily consume styles within the system is by using ‘groups’ or classes that redefine what a token equals based off of some class or state"
                },
                itemFour: {
                    style: "font-size: 1.1rem; font-weight: 500;", 
                    class: "",
                    text: "need to build empathy"
                },
                itemFive: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "lack of knowledge from people on the citrus team regarding the work processes for developers and designers using tokens"
                },
                itemSix: {
                    style: "font-size: 1.1rem; font-weight: 500;", 
                    class: "",
                    text: "need to consider user experience"
                },
                itemSeven: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "design system tooling is a user experience and should use UX processes for building out intuitive tooling"
                },
                itemEight: {
                    style: "font-size: 1.1rem; font-weight: 500;", 
                    class: "",
                    text: "need to validate assumptions"
                },
                itemNine: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "process decisions are being made based on assumptions because of a lack of bandwidth to test for validation"
                },
                itemTen: {
                    style: "font-size: 1.1rem; font-weight: 500;", 
                    class: "",
                    text: "cumbersome update process"
                },
                itemEleven: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "process for getting tokens updated and delivered to the customer is overly cumbersome"
                },
                
            }
    },
    moduleTwentyseven: {
            item: image,  
            header: "Team Work Processes: Updating Tokens",
            class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
            image: "/projects/citrus-design-system/update.png",
            style: "margin-top: 0px;"
    },
    moduleTwentyeight: {
        item: text, 
        header: "Modern Token Conventions",
        class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: "",
            inner: {     
                itemOne: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "grouped tokens"
                },
                itemTwo: {
                    style: "font-size: 1.1rem;",  
                    class: "padding-bottom-base",
                    text: "a way to enable teams to easily consume styles within the system is by using ‘groups’ or classes that redefine what a token equals based off of some class or state"
                },
                itemThree: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "dynamic redefinition"
                },
                itemFour: {
                    style: "font-size: 1.1rem;",  
                    class: "",
                    text: "this allows you to redefine what a value equals based off of some situational context; this could include interactions, brand theming, states, media queries, etc."
                },
                itemFive: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "easy refresh"
                },
                itemSix: {
                    style: "font-size: 1.1rem;",  
                    class: "",
                    text: "modern design systems typically have a way to easily refresh references to different tokens within our team"
                },
                itemSeven: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "aliases"
                },
                itemEight: {
                    style: "font-size: 1.1rem;",  
                    class: "",
                    text: "aliases are used in enterprise design systems to allow for styling to be cascaded throughout the system and can help to enable ease of updates as the product evolves"
                },
                itemNine: {
                    style: "font-size: 1.1rem; font-weight:500;", 
                    class: "",
                    text: "classes"
                },
                itemTen: {
                    style: "font-size: 1.1rem;",  
                    class: "",
                    text: "classes are typically used to communicate all of the style properties for an element. This is beneficial when sharing design attributes for things like type elements"
                }

            }
    },
     moduleTwentynine: {
            item: image,  
            header: "**Revised** Team Work Processes: Updating Tokens",
            class: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
            image: "/projects/citrus-design-system/ideal-update.png",
            style: "margin-top: 0px;"
    },


}
---