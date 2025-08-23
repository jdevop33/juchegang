"use client"

import { useFluidScroll, useStaggeredFluidScroll } from "@/hooks/use-fluid-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FluidDemo() {
  const scrollRef = useFluidScroll()
  const staggerRef = useStaggeredFluidScroll(150)

  return (
    <div className="space-y-8 p-8">
      {/* Fluid Scroll Animation Demo */}
      <div ref={scrollRef} className="text-center">
        <h2 className="text-3xl font-bold text-gradient-premium">
          Fluid UI Enhancements
        </h2>
        <p className="text-muted-foreground mt-2">
          Experience smoother, more engaging interactions
        </p>
      </div>

      {/* Button Variants Demo */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="default">Default Button</Button>
        <Button variant="fluid">Fluid Button</Button>
        <Button variant="magnetic">Magnetic Button</Button>
        <Button variant="outline" className="hover-lift-premium">
          Premium Hover
        </Button>
      </div>

      {/* Card Demo with Staggered Animation */}
      <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-fluid glass-fluid">
          <CardHeader>
            <CardTitle className="text-fluid">Smooth Interactions</CardTitle>
            <CardDescription>Enhanced hover states and transitions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Buttons now have ripple effects, magnetic hover states, and smooth elevation changes.</p>
          </CardContent>
        </Card>

        <Card className="card-premium breathing">
          <CardHeader>
            <CardTitle className="text-shadow-premium">Premium Animations</CardTitle>
            <CardDescription>Advanced keyframe animations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards feature 3D transforms, breathing animations, and enhanced glass morphism.</p>
          </CardContent>
        </Card>

        <Card className="hover-lift-premium gentle-glow">
          <CardHeader>
            <CardTitle>Fluid Scrolling</CardTitle>
            <CardDescription>Staggered reveal animations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Elements smoothly animate into view with configurable stagger delays.</p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Elements */}
      <div className="flex justify-center space-x-4">
        <button className="fluid-hover px-6 py-3 bg-accent text-accent-foreground rounded-lg">
          Fluid Hover
        </button>
        <button className="magnetic px-6 py-3 bg-primary text-primary-foreground rounded-lg">
          Magnetic Effect
        </button>
        <button className="btn-premium px-6 py-3 text-white rounded-lg">
          Premium Button
        </button>
      </div>

      {/* Loading State Demo */}
      <div className="space-y-4">
        <div className="loading-fluid h-4 w-full rounded"></div>
        <div className="loading-fluid h-4 w-3/4 rounded"></div>
        <div className="loading-fluid h-4 w-1/2 rounded"></div>
      </div>

      {/* Text Animations */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold smooth-pulse">Smooth Pulse Text</h3>
        <p className="text-fluid text-lg">Hover over this text for gentle lift animation</p>
        <div className="text-gradient-premium text-xl font-semibold">
          Gradient Text Animation
        </div>
      </div>
    </div>
  )
}