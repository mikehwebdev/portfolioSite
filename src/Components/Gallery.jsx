import { useEffect, useState } from "react"


// *** Gallery component *** - main image and selection of thumbnail images to choose to display
export default function Gallery({ imgArray, id }) {
    // Track which image is currently selected for the large display
    const [selectedImage, setSelectedImage] = useState(0)
    // Track whether the animation is currently playing
    const [animating, setAnimating] = useState(true)

    //  Function that processes image selection and triggers fade animation  
    function updateMassiveImage(index) {
        // Prevent animation if the same image is already selected
        if (selectedImage === index) {
            return
        }
        // Start fade-out animation
        setAnimating(false)
        // Update the selected image after fade-out completes
        setTimeout(() => {
            setSelectedImage(index)
        }, 200)

        // Re-enable height of image to make it grow - all in all creating a "shutter" effect
        setTimeout(() => {
            setAnimating(true)
        }, 600)
    }

    // Create thumbnail image elements from the image array 
    const imageElements = imgArray.map((img, index) =>
        <img
            // Add border highlight class if this image is currently selected
            className={`project-image${selectedImage === index ? ' pulsing-image' : ''}`}
            src={img}
            key={index}
            alt={`Horror Movie project snapshot ${index + 1} of ${imgArray.length}`}
            // Handle click to update the large preview image
            onClick={() => updateMassiveImage(index)}
        />)

    return (
        <>
            {/* Thumbnail gallery container */}
            <div className="project-gallery-container">
                {imageElements}
            </div>
            {/* Main large image container  */}
            <div className={`project-massive-image-container${animating ? ' massive-image-max-height' : ''}`}>
                {/* Display the currently selected image with fade animation class applied */}
                <img
                    src={imgArray[selectedImage]}
                    alt={"Selected project image"}
                    className="project-massive-image"
                />
            </div>
        </>
    )
}