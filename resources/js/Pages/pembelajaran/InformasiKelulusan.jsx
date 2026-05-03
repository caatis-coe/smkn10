import React, { useEffect, useState } from 'react';
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';

function InformasiKelulusan({ datetime = "" , link = ""}) {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const targetTime = new Date(datetime).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            setTimeLeft(Math.max(distance, 0));
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [datetime]);

    const isFinished = timeLeft <= 0;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <DefaultLayout>
            <ContentTitle title="PEMBELAJARAN" subTitle="INFORMASI KELULUSAN" />

            <div className="w-full h-[calc(100vh-512px)] flex flex-col justify-center items-center gap-4">
                <div className="flex gap-6">
                    {[
                        { label: "HARI", value: days },
                        { label: "JAM", value: hours },
                        { label: "MENIT", value: minutes },
                        { label: "DETIK", value: seconds },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`
                    w-16 lg:mx-24 xl:mb-2 flex items-center justify-center
                    xl:text-9xl text-6xl font-semibold
                    ${isFinished ? 'text-redprimary' : 'text-primary'}
                `}
                            >
                                {String(item.value).padStart(2, '0')}
                            </div>
                            <span className="text-sm mt-2 tracking-widest">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {isFinished && (
                    <div className="mt-12 text-center">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition"
                        >
                            Lihat Informasi Kelulusan
                        </a>
                    </div>
                )}

                
            </div>
        </DefaultLayout>
    );
}

export default InformasiKelulusan;