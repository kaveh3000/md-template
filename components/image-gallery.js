import CustomLink from "./custom-link"
import Image from "next/image"

export default function ImageGallery( { imageGallery, restProps } ) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:justify-between mt-16 mb-16 md:mb-12">
        {imageGallery.map((item, index) => (
          <div className="p-3 md:p-6 lg:p-9">
            <CustomLink
              link={ (item.targetUrl?{"url":item.targetUrl}: {"url":"#"}) }
            >
              <img className="object-cover rounded md:rounded-lg lg:rounded-2xl"
              src={item.imageUrl}
              key={index}
              />
            </CustomLink>
          </div>
        ))}
      </section>
    )
  }
  