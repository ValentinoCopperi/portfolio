"use client"

import { Button } from './ui/button'

const CvBtn = () => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/cv-valentino.pdf' 
        link.download = 'cv-valentino.pdf'
        link.click()
    }
    return (
        <Button variant="outline" onClick={handleDownload}>
            Download Cv
        </Button>
    )
}

export default CvBtn