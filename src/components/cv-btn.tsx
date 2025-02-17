"use client"

import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const CvBtn = () => {
    const handleDownload = (language : "ingles" | "español") => {
        const link = document.createElement('a')
        link.href = `/cv-valentino-${language}.pdf`
        link.download = `/cv-valentino-${language}.pdf`
        link.click()
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
                    Download Cv
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button variant="ghost" onClick={()=>handleDownload("ingles")}>
                        English
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant="ghost" onClick={()=>handleDownload("español")}>
                        Spanish
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default CvBtn