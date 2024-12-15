const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">Privacy Policy</h1>

            {/* Content Sections */}
            <div className="space-y-8 leading-relaxed">
                <p>
                    This Privacy Policy describes how we handle your personal information in accordance with accessing
                    and using the PlayGame168 website. This policy ensures that your data is handled in compliance with
                    data protection laws and our commitment to protecting your privacy.
                </p>

                {/* Section: Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">Newsletter</h2>
                    <p>
                        By subscribing to our newsletter, you provide your email address for updates on promotions,
                        games, and news. Your email address will not be shared with third parties unless required by law.
                    </p>
                </div>

                {/* Section: Correspondence */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">Correspondence</h2>
                    <p>
                        When you contact us via email or chat for any inquiries, your personal information, including your
                        name and contact details, may be retained for record-keeping and quality assurance purposes. We
                        take every precaution to ensure the security and confidentiality of your data.
                    </p>
                </div>

                {/* Section: What Information We Collect */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">What Personal Information Do We Collect About You?</h2>
                    <p>
                        We collect and process personal information for the following reasons:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Your name, email address, and contact details.</li>
                        <li>Payment details for transactions on our platform.</li>
                        <li>Your browsing activity and game preferences.</li>
                    </ul>
                </div>

                {/* Section: How We Use Your Personal Data */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">How Will We Use Your Personal Data?</h2>
                    <p>
                        Your data will only be used for purposes related to providing services, legal compliance, and
                        improving the user experience. These include:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Processing your bets and account transactions.</li>
                        <li>Communicating promotions and service updates.</li>
                        <li>Enhancing website functionality and user experience.</li>
                    </ul>
                </div>

                {/* Section: Who We Share Your Data With */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">Who Do We Share Your Data With?</h2>
                    <p>
                        We may share your data with authorized third parties such as payment processors, analytics
                        providers, and regulatory authorities when legally required.
                    </p>
                </div>

                {/* Section: Your Rights */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">What Are Your Rights?</h2>
                    <p>
                        As a user, you have the right to:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Access the personal data we hold about you.</li>
                        <li>Request corrections to inaccurate data.</li>
                        <li>Request the deletion of your personal information under specific conditions.</li>
                        <li>Withdraw consent for data processing where applicable.</li>
                    </ul>
                </div>

                {/* Section: Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">Contact</h2>
                    <p>
                        If you have any questions or concerns regarding your personal data, you may contact our support
                        team at <span className="text-yellow-300">support@icggmaing.com</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
