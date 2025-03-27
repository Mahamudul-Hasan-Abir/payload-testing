import CoverBlockServer from '@/blocks/cover/Server'
import Testimonials from '@/blocks/testimonials/Server'
import TestimonialsBlockServer from '@/blocks/testimonials/Test'
import { Page } from '@/payload-types'
import test from 'node:test'
import React, { Fragment } from 'react'

const blockComponents = {
  cover: CoverBlockServer, // ✅ Existing cover block
  // testimonials: Testimonials, // ✅ Added testimonials block for dynamic rendering
  testimonials: TestimonialsBlockServer,
}

export const RenderBlocks: React.FC<{ blocks: Page['layout'][0][] }> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null // ✅ Return nothing if no blocks exist
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockName, blockType } = block
        const BlockComponent = blockComponents[blockType] // ✅ Dynamically select the correct block

        if (BlockComponent) {
          return (
            <div className="my-16" key={index}>
              <BlockComponent id={blockName} {...block} />{' '}
              {/* ✅ Render the correct block component */}
            </div>
          )
        }

        return null // ✅ Skip rendering if block type is unrecognized
      })}
    </Fragment>
  )
}
