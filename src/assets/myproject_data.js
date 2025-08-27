import BookingWebService from '../assets/BookingWebService.png'
import SmartContentTranslator from '../assets/SmartContentTranslator.png'
import TravelApp from '../assets/TravelApp.png'
import IntelDataCenter from '../assets/IntelDataCenter.png'
import BikeAnalysis from '../assets/BikeAnalysis.png'
import HappinessbyNumber from '../assets/HappinessbyNumber.png'

const myproject_data = [
    {
        id: 1,
        title: "Restaurant Booking App",
        p_img: BookingWebService,
        overview: "This project centered on creating a seamless online reservation platform tailored for restaurants and their customers. The goal was to simplify the dining reservation process while also giving users personalized options based on their preferences. In a team of four we developed a responsive interface that allows diners to explore available tables in real-time, apply filters for cuisine or ambiance, and confirm bookings instantly. A PostgreSQL-backed data system supported secure account creation, authentication, and personalized preference handling. The end result was a full-stack application that improves the customer dining experience while reducing booking conflicts for restaurants.", 
        features: [
            "Responsive reservation system with React.js for dynamic front-end rendering and Node.js for efficient server-side routing.",
            "PostgreSQL database to manage user accounts, authentication, and preference storage.",
            "Preference-based filters for personalized dining recommendations.",
            "Real-time reservation updates to minimize booking conflicts."
        ], 
        techStack: ["HTML", "CSS", "React.js", "Node.js", "PostgreSQL"]
    }, 
    {
        id: 2,
        title: "Travel App",
        p_img: TravelApp,
        overview: "This project was designed to enhance personal storytelling by helping travelers document their journeys in a rich, engaging way. The mobile app allows users to capture notes, photos, and geolocation data in one place, creating a personalized digital diary of their experiences. Built with Swift and structured using the MVVM architecture, the app also integrates with Firebase Firestore and Cloud Storage to ensure seamless cross-device access to user-generated content. By incorporating a remote image API for travel visuals, the app adds an immersive feel that makes journaling more engaging. The project showcases how mobile applications can combine multimedia and cloud services to create both a functional and enjoyable user experience.", 
        features: [
            "Travel diary entries with integrated text, photos, and location pins.",
            "Remote image API integration for travel-themed visual suggestions.",
            "Cloud-based storage with Firebase Firestore and Cloud Storage for multi-device access.",
            "Offline mode with data sync when internet is available."
        ], 
        techStack: ["Swift", "MVVM Architecture", "Firebase Firestore", "Firebase Cloud Storage"]
    }, 
    {
        id: 3,
        title: "Smart Content Translator",
        p_img: SmartContentTranslator,
         overview: "This project focused on making digital content more accessible across languages and formats. I built a multi-layered web application that allows users to filter, summarize, and translate online text dynamically. The front end, developed in ASPX, was tightly integrated with .NET backend services to support modular functionality and smooth cross-component communication. A custom wrapper for the Google Translate API enabled real-time multilingual support, while service integration with REST, SOAP, and WSDL allowed for broader interoperability. By combining summarization and translation, this project created a tool that can help users quickly digest information while breaking down language barriers." , 
        features: [
            "End-to-end integration of front-end ASPX pages with backend .NET services.",
            "Google Translate API integration via a custom-built wrapper for dynamic, multi-language translation.",
            "Content summarization module to condense lengthy articles.",
            "Modular architecture enabling future addition of AI-powered summarization methods."
        ], 
        techStack: [".NET", "ASPX", "REST", "SOAP", "WSDL", "Google Translate API", "Microsoft Visual Studio"]
    }, 
    {
        id: 4,
        title: "Intel Data Center Location",
        p_img: IntelDataCenter,
        overview: "This project explored Intel’s data center locations through the lens of energy production and sustainability. The goal was to evaluate how Intel balances renewable energy adoption with fossil fuel dependence across different regions. By building interactive Tableau dashboards, I highlighted regional energy consumption trends, renewable vs. fossil adoption rates, and state-level efficiency. This analysis not only surfaced sustainability gaps but also created a tool that stakeholders could use to compare performance across geographies and inform future green initiatives.", 
        features: [
            "Built interactive Tableau dashboards to compare renewable vs. fossil energy adoption across regions.",
            "Visualized state-level energy efficiency trends to support decision-making on sustainable infrastructure.",
            "Highlighted weekly patterns of renewable vs. fossil energy use."
        ], 
        techStack: ["Tableau", "Excel", "SQL"]
    }, 
    {
        id: 5,
        title: "Bike Analysis",
        p_img: BikeAnalysis,
        overview: "This project focused on uncovering insights into urban mobility patterns through bike rental data. The challenge was to understand when and how people use rental bikes, and what factors (such as time of day, seasonality, and demographics) drive demand. I designed a Python-based data pipeline to clean and preprocess the dataset, then developed visualizations that revealed peak usage hours, seasonal trends, and differences between commuter and recreational riders. The resulting dashboard provided actionable insights that could guide city planners, bike-share operators, and sustainability advocates in optimizing fleet distribution and improving customer experience.", 
        features: [
            "Preprocessed raw bike rental data with Python (Pandas) to clean and structure datasets.",
            "Built visualizations with Matplotlib to explore seasonal patterns, peak hours, and rider profiles.",
            "Identified insights on commuting vs. leisure trends, enabling potential use cases in bike fleet optimization."
        ], 
        techStack: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"]
    }, 
    {
        id: 6,
        title: "HappinessbyNumber",
        p_img: HappinessbyNumber,
        overview: "This project analyzed global happiness indicators to better understand the relationship between socio-economic factors and well-being. Using the World Happiness Report as a primary dataset, I explored correlations between happiness scores and metrics like GDP per capita, social support, life expectancy, and freedom of choice. By combining Python-based analysis with Tableau visualizations, I crafted an interactive storytelling experience that highlights not just rankings, but why some nations consistently score higher on happiness than others. This project aimed to make abstract concepts like “well-being” more tangible and data-driven, sparking discussions about the role of economics, culture, and governance in shaping quality of life.", 
        features: [
            "Combined economic and social datasets (GDP, social support, life expectancy, freedom) for exploratory analysis.",
            "Built Python visualizations and Tableau dashboards to illustrate correlations between well-being and socio-economic factors.",
            "Highlighted surprising findings, such as nations with high GDP but low happiness scores due to weaker social support systems."
        ], 
        techStack: ["Python", "Pandas", "Tableau"]
    }
]

export default myproject_data