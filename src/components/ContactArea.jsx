import Contact from "./Contact"

const ContactArea = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-12 mx-6 md:mx-60 gap-6">
        <div className="flex flex-col justify-between align-top" >
            <h2 className="text-xl md:text-4xl">Let's connect!</h2>
            <h2 className="text-lg mb-10">Send me a message.</h2>
            <p>Geek out about tech, contact for collaborations, and more!</p>
        </div>
        <Contact />
    </div>
  )
}

export default ContactArea