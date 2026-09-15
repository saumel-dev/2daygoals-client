'use client'
import { useEffect, useState } from 'react';

const TableOfContents = ({ sections }) => {
    const [activeId, setActiveId] = useState(sections?.[0]?.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div>
            <p className="text-xs font-medium text-[#A0A0A0] mb-3">Table of contents</p>
            <ul className="flex flex-col gap-2.5">
                {sections.map((section) => (
                    <li key={section.id}> <a

                        href={"#" + section.id}
                        className={
                            activeId === section.id
                                ? "text-sm transition text-[#111] font-semibold"
                                : "text-sm transition text-[#9A9A9A] hover:text-[#555]"
                        }
                    >
                        {section.heading}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;