module CitationFormatting
  SUFFIXES = [
    ["B", 1_000_000_000.0],
    ["M", 1_000_000.0],
    ["K", 1_000.0],
  ].freeze

  def self.number_to_human(value)
    number = value.to_i
    return number.to_s if number.abs < 1_000

    SUFFIXES.each do |suffix, divisor|
      next if number.abs < divisor

      scaled = number / divisor
      precision =
        if scaled.abs >= 100
          0
        elsif scaled.abs >= 10
          1
        else
          2
        end

      return "#{format("%.#{precision}f", scaled).sub(/\.?0+$/, '')}#{suffix}"
    end

    number.to_s
  end
end
