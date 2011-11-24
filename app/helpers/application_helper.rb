module ApplicationHelper
  # Return a title on a per-page basis.
  def title
    base_title = "frenchoverture - CV, lettre de motivation, et launch soon page - launching soon page - coming soon page "
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
end

