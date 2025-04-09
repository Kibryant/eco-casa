"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  image: string
  features: string[]
}

interface CategoryProductsProps {
  products: Product[]
}

export function CategoryProducts({ products }: CategoryProductsProps) {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">CONHEÇA NOSSA LINHA</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossos Produtos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa seleção de produtos, desenvolvidos com tecnologia avançada e compromisso
            ambiental para oferecer o melhor em qualidade e durabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl border border-primary/10 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={`feature-${index + 1}`}
                    className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

