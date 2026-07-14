# Compatibility shim: old gems pinned by `github-pages` (jekyll 3.9, liquid 4.0.3)
# call Object#tainted?/#taint/#untaint, removed from Ruby in 3.2+. Restore harmless
# no-ops on Object (not just String) so the legacy toolchain works on modern Ruby.
class Object
  def tainted?
    false
  end unless method_defined?(:tainted?)

  def taint
    self
  end unless method_defined?(:taint)

  def untaint
    self
  end unless method_defined?(:untaint)
end
