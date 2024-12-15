const Cookies_Policy = () => {
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">Cookies Policy</h1>

            {/* Content */}
            <div className="space-y-6 leading-relaxed">
                {/* Section: What are cookies */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">What are cookies?</h2>
                    <p>
                        &ldquo;Cookies&rdquo; are small files containing information that a website sends to your computer or mobile
                        while you view information on the website.
                    </p>
                    <p>
                        Cookies help us to improve your user experience by &lsquo;remembering&rsquo; you &ndash; your preferences are stored,
                        allowing you to use the website more efficiently. In other words, cookies are there to help you
                        navigate between pages easier and faster.
                    </p>
                </div>

                {/* Section: Cookies at playgame168.com */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                        Cookies at icggmaing.com
                    </h2>
                    <p>
                        At icggmaing.com, we use cookies that are strictly necessary to provide basic functions and ease
                        of navigation around our website. Further, cookies are used to enhance the functionality of the
                        site, for example, to store your preferences. Lastly, we use cookies to provide you with a better
                        user experience by improving the performance of our site.
                    </p>
                    <p>Below are three main types of Cookies we use on our website:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            <strong>Strictly Necessary Cookies</strong>: These Cookies are in charge of the website
                            functionality, language, and make sure correct elements of the website are loaded in a proper
                            way.
                        </li>
                        <li>
                            <strong>Functionality Cookies</strong>: These remember user choices, track affiliate
                            information, remember whether a page has been accessed before, and display content based on
                            preferences. They also provide geo-targeting for site language purposes.
                        </li>
                        <li>
                            <strong>Performance Cookies</strong>: Used to track the way users visit the websites, perform
                            internal anonymous data mining, testing different design ideas, and improve our site&rsquo;s layout.
                        </li>
                    </ul>
                    <p>
                        Please note that playgame168.com will never use any form of online behavioural advertising cookies,
                        nor allow any third parties to do so on our sites.
                    </p>
                </div>

                {/* Section: Managing Cookies */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">Managing Cookies</h2>
                    <p>
                        Currently, we are unable to offer you the option of enabling or disabling individual categories of
                        cookies. When you visit our website, icggmaing.com places a cookie on your device and will
                        remember your preferences to ensure you keep enjoying our services. If you clicked &ldquo;Accept&rdquo; on our
                        Cookies Browser bar, or if you carried on using our website and services, you are deemed to have
                        accepted our use of Cookies in the way described in this policy.
                    </p>
                    <p>
                        Nonetheless, your browser settings can be modified to ensure it will not accept cookies from any
                        website. You can find instructions on how to implement this in the &lsquo;Help&rsquo; section of your chosen
                        browser. However, for security reasons, you may find that certain website content is not accessible
                        unless the use of cookies is enabled on your device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cookies_Policy;
