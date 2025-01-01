import React from 'react';
import { useTranslations } from 'next-intl';
const PrivacyPolicy = () => {
    const t = useTranslations('SecurityAndPolicy.PrivacyPolicy');
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">{t('title')}</h1>

            {/* Content Sections */}
            <div className="space-y-8 leading-relaxed">
                <p>
                    {t('sections.0.content.0')}
                </p>

                {/* Section: Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.1.title')}</h2>
                    <p>
                        {t('sections.1.content.0')}
                    </p>
                </div>

                {/* Section: Correspondence */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.2.title')}</h2>
                    <p>
                        {t('sections.2.content.0')}
                    </p>
                </div>

                {/* Section: What Information We Collect */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                        {t('sections.3.title')}
                    </h2>
                    <p>
                        {t('sections.3.content.0')}
                    </p>
                    <ul className="list-disc pl-6">
                        <li>{t('sections.3.content.1')}</li>
                        <li>{t('sections.3.content.2')}</li>
                        <li>{t('sections.3.content.3')}</li>
                    </ul>
                </div>

                {/* Section: How We Use Your Personal Data */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.4.title')}</h2>
                    <p>
                        {t('sections.4.content.0')}
                    </p>
                    <ul className="list-disc pl-6">
                        <li>{t('sections.4.content.1')}</li>
                        <li>{t('sections.4.content.2')}</li>
                        <li>{t('sections.4.content.3')}</li>
                    </ul>
                </div>

                {/* Section: Who We Share Your Data With */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.5.title')}</h2>
                    <p>
                        {t('sections.5.content.0')}
                    </p>
                </div>

                {/* Section: Your Rights */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.6.title')}</h2>
                    <p>
                        {t('sections.6.content.0')}
                    </p>
                    <ul className="list-disc pl-6">
                        <li>{t('sections.6.content.1')}</li>
                        <li>{t('sections.6.content.2')}.</li>
                        <li>{t('sections.6.content.3')}</li>
                        <li>{t('sections.6.content.4')}</li>
                    </ul>
                </div>

                {/* Section: Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.7.title')}</h2>
                    <p>
                        {t('sections.7.content.0')} <span className="text-yellow-300">{t('sections.7.content.1')}</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
