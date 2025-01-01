import React from 'react';
import { useTranslations } from 'next-intl';
const Cookies_Policy = () => {
    const t = useTranslations('SecurityAndPolicy.CookiesPolicy');
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">{t('title')}</h1>

            {/* Content */}
            <div className="space-y-6 leading-relaxed">
                {/* Section: What are cookies */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.0.title')}</h2>
                    <p>
                        {t('sections.0.content.0')}
                    </p>
                    <p>
                        {t('sections.0.content.1')}
                    </p>
                </div>

                {/* Section: Cookies at playgame168.com */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                        {t('sections.1.title')}
                    </h2>
                    <p>
                        {t('sections.1.content.0')}
                    </p>
                    <p>{t('sections.1.content.1')}</p>
                    <ul className="list-disc pl-6">
                        <li>
                            <strong>{t('sections.1.content.2')}</strong> {t('sections.1.content.3')}
                        </li>
                        <li>
                            <strong>{t('sections.1.content.4')}</strong> {t('sections.1.content.5')}
                        </li>
                        <li>
                            <strong>{t('sections.1.content.6')}</strong> {t('sections.1.content.7')}
                        </li>
                    </ul>
                    <p>
                        {t('sections.1.content.8')}
                    </p>
                </div>

                {/* Section: Managing Cookies */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.2.title')}</h2>
                    <p>
                        {t('sections.2.content.0')}
                    </p>
                    <p>
                        {t('sections.2.content.1')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cookies_Policy;
