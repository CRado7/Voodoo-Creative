import Reia from "../assets/reia-thumbnail.png";
import TPS from "../assets/tps-thumbnail.png";
import ChungLi from "../assets/chung-li/Oompa-Banner.svg";
    import Oompa from "../assets/chung-li/Oompa.png";
    import Identity from "../assets/chung-li/Identity.png";
const jobData = [
    {
        id: 1,
        caseType: "Case Study",
        image: Reia,
        company: "Reia",
        services: [
            "Web Design",
            "Web Development",
        ],
        tag: "Launching a newly FDA approved medical device that provides support for women.",
        header: {
            title: "Bringing a new medical device to the web with a fresh design and digestible content.",
            intro: "Reia is a medical device company that provides support for women. They recently launched a new FDA approved device and needed a website to showcase their product and provide information to potential customers. The goal was to create a modern, user-friendly website that would effectively communicate the benefits of the device and drive conversions. Reia has reached global audiences in their first year of business.",
        },
        approach: {
            title: "Our Approach",
            description: "We took a collaborative approach with Reia to understand their brand, target audience, and goals for the website. We conducted research on the medical device industry and analyzed competitors to identify best practices and opportunities for differentiation. We then developed a comprehensive design and development plan that included wireframes and a content strategy.",
        },
        design: {
            title: "Design",
            description: "The design of the website was inspired by the medical device itself, with a focus on typography and a color palette that reflects the brand's identity. We created a responsive design that works seamlessly on all devices, ensuring a positive user experience.",
            images: [],
        },
        identity: {
            title: "Identity and design",
            images: [],
        },
        website: {
            title: "Website",
            images: [],
        },
        featured: true,
    },
    {
        id: 2,
        caseType: "Case Study",
        image: TPS,
        company: "The Print Shop",
        services: [
            "Web Design",
            "Web Development",
        ],
        tag: "A print shop that specializes in custom printing and design services.",
        header: {
            title: "Creating a modern website for a traditional print shop.",
            intro: "The Print Shop is a family-owned business that has been in operation for over 30 years. They needed a new website to showcase their services and attract new customers. The goal was to create an updated, user-friendly website that would be easy to navigate and visually appealing.",
        },
        approach: {
            title: "Our Approach",
            description: "We worked closely with The Print Shop to understand their brand and target audience. A once abondaoned website was reimagined to be a modern, user-friendly site that would effectively showcase their services and enhance the customer experience.",
        },
        design: {
            title: "Design",
            description: "The design of the website was inspired by the print shop's history and legacy. We created a modern, clean design that highlights their services and makes it easy for customers to request quotes and understand the art submission guidelines.",
            images: [],
        },
        identity: {
            title: "Identity and design",
            images: [],
        },
        website: {
            title: "Website",
            images: [],
        },
        featured: false,
    },
    {
        id: 3,
        caseType: "Case Study",
        image: ChungLi,
        company: "Chung-Li The Conisseur",
        services: [
            "Package Design",
        ],
        tag: "Oompa Loops!",
        header: {
            title: "Bringing Oompa Loompa's to the cannabis world.",
            intro: "Chung Li The Conisseur is a cannabis company that specializes in high-quality, artisanal products. They needed a new package design to showcase their products and attract new customers. The goal was to create a unique, eye-catching design that would stand out on the shelves and reflect the brand's identity.",
        },
        approach: {
            title: "Our Approach",
            description: "We worked closely with Chung Li The Conisseur to understand their brand and target audience. We conducted research on the cannabis industry and analyzed competitors to identify best practices and opportunities for differentiation. We then developed a comprehensive design plan that included packaging and branding.",
        },
        design: {
            title: "Design",
            description: "The design of the packaging was inspired by the Willy Wonka's Oompa Loompas. The design showcases a modern twist on Oompa Loompas and showcases games to enhance the overall experience of the product.",
            images: [
                Oompa,
            ],
        },
        identity: {
            title: "Identity and design",
            images: [
                Identity,
            ],
        },
        website: {
            title: "",
            images: [],
        },
        featured: true,
    },
]

export default jobData;