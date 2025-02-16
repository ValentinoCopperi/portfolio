"use client"

import { Button } from "@/components/ui/button"

const ButtonTalk = () => {
    const handleClick = () => {
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <Button onClick={handleClick} variant={"link"} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Lets talk →
        </Button>
    )
}

export default ButtonTalk