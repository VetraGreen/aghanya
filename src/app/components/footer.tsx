export default function Footer() {
    return(
        <div className="py-10 bg-[#492a28] px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem]">
            {/* <div className="text-6xl">GET IN TOUCH</div>
            <div className="text-4xl translate-y-2 text-[#848484]">for Contact, Questions, Orders, Support, Feedback</div> */}
            <div className="text-[2rem]">GET IN TOUCH</div>
            <div className="text-[1.5rem] translate-y-2 text-[#848484]">for Contact, Questions, Orders, Support, Feedback</div>
            <div className="flex justify-between flex-row text-[1.7rem] mt-14 gap-6 flex-wrap">
                <div className="">
                    OUR TEAM:
                    <div className="text-[1.5rem] pt-2 text-[#848484]">
                        <div>Shri TJ Ravindran, Bangalore</div>
                        <div>Bhakti Joshi, Bangalore </div>
                        <div>Ameya Sirpotdar, Seattle </div>
                        <div>and our all-weather kins.</div>
                    </div>  
                </div>
                <div>
                    EMAIL: 
                    <div className="text-[1.5rem] pt-2 text-[#848484]">aghanya@vetragreentech.com</div>
                </div>
                <div>
                    WHATSAPP:
                    <div className="text-[1.5rem] pt-2 text-[#848484]">+91 91642 93953, +1 224 622 4581</div>
                </div>
            </div>
        </div>
    )
}