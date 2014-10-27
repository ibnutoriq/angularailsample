module ApplicationHelper
  def note(text)
    content_tag(:div, content_tag(:p, content_tag(:strong, "Note: ") + text), class: "alert alert-success")
  end

  def code(text)
    content_tag(:pre, content_tag(:code, text))
  end
end
