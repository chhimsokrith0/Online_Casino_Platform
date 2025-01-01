import React from 'react';
import { useTranslations } from 'next-intl';
const Terms_And_Conditions = () => {
    const t = useTranslations('SecurityAndPolicy.TermsandConditions');
    return (
        <div className="bg-gray-800 text-gray-300 p-6 sm:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-6">
                {t('title')}
            </h1>

            {/* Content Sections */}
            <div className="space-y-8 leading-relaxed">
                <p>
                    {t('content.0')}
                </p>

                {/* Section 1 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">{t('sections.0.title')}</h2>
                    <p>
                        {t('sections.0.content.0')}
                    </p>
                    <p>
                        {t('sections.0.content.1')}
                    </p>
                </div>

                {/* Section 2 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">2. {t('sections.1.title')}</h2>
                    <p>
                        {t('sections.1.content.0')}
                    </p>
                    <ul className="list-disc pl-6">
                        <li>{t('sections.1.content.1')}</li>
                        <li>{t('sections.1.content.2')}</li>
                    </ul>
                    <p>
                        {t('sections.1.content.3')}
                    </p>
                    <ul className="list-disc pl-6">
                        {t('sections.1.content.4')} <br />
                        {t('sections.1.content.5')}
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">3. {t('sections.2.title')}</h2>
                    <p>
                        {t('sections.2.content.0')}
                    </p>
                </div>

                {/* Section 4 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">4. {t('sections.3.title')}</h2>
                    <p>
                        {t('sections.3.content.0')}
                    </p>
                </div>

                {/* Section 5 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">5. {t('sections.4.title')}</h2>
                    <ul className="list-disc pl-6">
                        <li>{t('sections.4.content.0')}</li>
                        <li>{t('sections.4.content.1')}</li>
                        <li>{t('sections.4.content.2')}</li>
                        <li>{t('sections.4.content.3')}</li>
                        <li>{t('sections.4.content.4')}</li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">6. {t('sections.5.title')}</h2>
                    <p>
                        {t('sections.5.content.0')}
                    </p>
                </div>

                {/* Section 7 */}
                <div>
                    <h2 className="text-xl font-semibold text-yellow-400 mb-2">7. {t('sections.6.title')}</h2>
                    <p>
                        {t('sections.6.content.0')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms_And_Conditions;
