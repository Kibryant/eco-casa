"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Leaf } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Decorative Leaves */}
        <motion.div
          className="absolute top-20 left-20 text-primary/10"
          animate={{
            rotate: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Leaf size={120} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 text-primary/10"
          animate={{
            rotate: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Leaf size={120} />
        </motion.div>
      </div>

      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 inline-block"
          >
            <div className="text-[10rem] md:text-[15rem] font-bold text-primary/10 leading-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image src="/logo.png" alt="Eco Casa Logo" fill className="object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Página Não Encontrada</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Parece que você se perdeu em nossa floresta digital. A página que você está procurando pode ter sido
              removida, renomeada ou está temporariamente indisponível.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="gap-2" variant="secondary">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Voltar para o Início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Voltar à Página Anterior
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

