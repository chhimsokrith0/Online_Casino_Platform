const Terms_And_Conditions = () => {
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">
                Terms and Conditions
            </h1>

            {/* Content Sections */}
            <div className="space-y-8 leading-relaxed">
                <p>
                    This page contains information in explaining your rights in accessing and using icggmaing.com website. 
                    The terms and conditions will be relating to games, promotions, and bonuses available on our site, 
                    which will be posted from time to time and will be incorporated herein by reference.
                </p>

                {/* Section 1 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">1. Definition</h2>
                    <p>
                        <span className="font-semibold">1.1</span> The following provisions define the terms and conditions that govern your access 
                        and participation in games or services provided by PlayGame168. These provisions should be read in conjunction 
                        with the <span className="text-yellow-300">“Betting Rules”</span>, <span className="text-yellow-300">“Privacy Policy”</span> 
                        and in-game Terms & Conditions.
                    </p>
                    <p>
                        <span className="font-semibold">1.2</span> 
                        “Games” refer to the internet gaming system on PlayGame168, which includes betting and wagers. 
                        “Device” means any platform that can access our application, including laptops, phones, and handheld devices. 
                        “Software” includes programs and files needed to access the website. “Sportsbook” refers to the internet gaming 
                        system offered on PlayGame168, and “Services” encompasses the Software and Games altogether.
                    </p>
                </div>

                {/* Section 2 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">2. Use of Site</h2>
                    <p>
                        <span className="font-semibold">2.1</span> You are allowed to play games only if you:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Are 18 years old or older.</li>
                        <li>Are legally entitled to play games in your country.</li>
                    </ul>
                    <p>
                        <span className="font-semibold">2.2</span> If we find that you are not entitled to play, we reserve the right to:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Immediately prevent you from participating in games.</li>
                        <li>Report you to relevant authorities.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">3. Modification</h2>
                    <p>
                        <span className="font-semibold">3.1</span> We reserve the right to amend, update, or modify the Terms and Conditions at our sole discretion. 
                        Continued use of icggmaing.com after amendments will constitute your acceptance of the changes.
                    </p>
                </div>

                {/* Section 4 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">4. Intellectual Property</h2>
                    <p>
                        <span className="font-semibold">4.1</span> All information on icggmaing.com, including text, graphics, and audio content, 
                        belongs to icggmaing.com and its licensors and is for personal, non-commercial use only.
                    </p>
                </div>

                {/* Section 5 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">5. Conditions of Use</h2>
                    <ul className="list-disc pl-6">
                        <li>You are acting in your personal capacity and not on behalf of another person.</li>
                        <li>You are of legal age to gamble.</li>
                        <li>You are not using money from unauthorized activities.</li>
                        <li>You will keep your account information secure.</li>
                        <li>You will not upload harmful programs, such as viruses.</li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">6. Registration and Membership</h2>
                    <p>
                        You must provide accurate information during registration. icggmaing.com reserves the right to reject applications 
                        or request further identification verification.
                    </p>
                </div>

                {/* Section 7 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">7. Placement of Bets</h2>
                    <p>
                        Bets will be accepted only through the internet and must comply with the terms and conditions. icggmaing.com 
                        reserves the right to void bets if errors occur or cheating is detected.
                    </p>
                </div>

                {/* Add other sections in the same format */}
            </div>
        </div>
    );
};

export default Terms_And_Conditions;
