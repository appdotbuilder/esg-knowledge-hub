// Simple implementation of class-variance-authority for component variants
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface VariantProps<TVariants> {
  variant?: string | number | boolean | undefined;
}

export function cva(
  base: string,
  options: {
    variants?: Record<string, Record<string, string>>;
    defaultVariants?: Record<string, string | number | boolean>;
  } = {}
) {
  return (props: Record<string, string | number | boolean | undefined> = {}) => {
    const { variants = {}, defaultVariants = {} } = options;
    
    let classes = base;
    
    // Apply default variants
    const finalProps = { ...defaultVariants, ...props };
    
    // Apply variant classes
    for (const [variantKey, variantValue] of Object.entries(finalProps)) {
      if (variants[variantKey] && variants[variantKey][String(variantValue)]) {
        classes += ' ' + variants[variantKey][String(variantValue)];
      }
    }
    
    return classes;
  };
}