import { useState } from "react";
import "./App.css";
import Canva from "./canva";

function App() {
  // =====================================================
  // MAIN STATE
  // =====================================================

  const [tools, setTools] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMoreTools, setShowMoreTools] = useState(false);

  // =====================================================
  // CREATE / EDITOR MODAL
  // =====================================================

  const [modal, setModal] = useState({
    open: false,
    type: null,
    mode: null,
    itemId: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    width: "50%",
    height: "50%",
    src: "",
    href: "#",
  });

  const [cssData, setCssData] = useState({});
  const [newCSSProperty, setNewCSSProperty] = useState("");
  const [newCSSValue, setNewCSSValue] = useState("");

  // =====================================================
  // ALL COMPONENT TYPES
  // =====================================================

  const COMPONENTS = [
    { type: "container", label: "Container", icon: "▣", priority: true },
    { type: "button", label: "Button", icon: "▰", priority: true },
    { type: "text", label: "Text", icon: "T", priority: true },
    { type: "heading", label: "Heading", icon: "H", priority: true },
    { type: "paragraph", label: "Paragraph", icon: "¶", priority: true },
    { type: "input", label: "Input", icon: "⌨", priority: true },
    { type: "link", label: "Link", icon: "↗", priority: true },
    { type: "iconButton", label: "Icon Button", icon: "◉", priority: true },
    { type: "image", label: "Image", icon: "▧", priority: true },

    { type: "label", label: "Label", icon: "L" },
    { type: "icon", label: "Icon", icon: "✦" },
    { type: "avatar", label: "Avatar", icon: "●" },
    { type: "badge", label: "Badge", icon: "●" },
    { type: "tag", label: "Tag", icon: "#" },
    { type: "chip", label: "Chip", icon: "◇" },
    { type: "divider", label: "Divider", icon: "—" },
    { type: "separator", label: "Separator", icon: "―" },
    { type: "spacer", label: "Spacer", icon: "↕" },
    { type: "tooltip", label: "Tooltip", icon: "?" },
    { type: "spinner", label: "Spinner", icon: "◌" },
    { type: "loader", label: "Loader", icon: "◔" },
    { type: "progressBar", label: "Progress Bar", icon: "▰" },
    { type: "skeleton", label: "Skeleton", icon: "▤" },

    { type: "select", label: "Select", icon: "⌄" },
    { type: "checkbox", label: "Checkbox", icon: "☑" },
    { type: "card", label: "Card", icon: "▭" },
  ];

  // =====================================================
  // CSS ATTRIBUTE GROUPS
  // =====================================================

  const COMMON_LAYOUT = [
    ["width", "Width"],
    ["height", "Height"],
    ["minWidth", "Min Width"],
    ["minHeight", "Min Height"],
    ["maxWidth", "Max Width"],
    ["maxHeight", "Max Height"],
    ["margin", "Margin"],
    ["marginTop", "Margin Top"],
    ["marginRight", "Margin Right"],
    ["marginBottom", "Margin Bottom"],
    ["marginLeft", "Margin Left"],
    ["padding", "Padding"],
    ["paddingTop", "Padding Top"],
    ["paddingRight", "Padding Right"],
    ["paddingBottom", "Padding Bottom"],
    ["paddingLeft", "Padding Left"],
    ["border", "Border"],
    ["borderRadius", "Border Radius"],
    ["boxShadow", "Box Shadow"],
    ["display", "Display"],
    ["position", "Position"],
    ["zIndex", "Z Index"],
    ["opacity", "Opacity"],
    ["overflow", "Overflow"],
  ];

  const COMMON_TEXT = [
    ["color", "Text Color"],
    ["fontFamily", "Font Family"],
    ["fontSize", "Font Size"],
    ["fontWeight", "Font Weight"],
    ["lineHeight", "Line Height"],
    ["letterSpacing", "Letter Spacing"],
    ["textAlign", "Text Align"],
    ["textTransform", "Text Transform"],
    ["textDecoration", "Text Decoration"],
  ];

  const FLEX = [
    ["alignItems", "Align Items"],
    ["justifyContent", "Justify Content"],
    ["flexDirection", "Flex Direction"],
    ["gap", "Gap"],
  ];

  const CSS_FIELDS = {
    container: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...FLEX,
    ],

    button: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ...FLEX,
      ["cursor", "Cursor"],
    ],

    text: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
    ],

    heading: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
    ],

    paragraph: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
    ],

    label: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
    ],

    link: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["cursor", "Cursor"],
    ],

    iconButton: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ...FLEX,
      ["cursor", "Cursor"],
    ],

    icon: [
      ...COMMON_LAYOUT,
      ["color", "Color"],
      ["fontSize", "Font Size"],
      ["lineHeight", "Line Height"],
      ["display", "Display"],
      ["alignItems", "Align Items"],
      ["justifyContent", "Justify Content"],
    ],

    image: [
      ...COMMON_LAYOUT,
      ["objectFit", "Object Fit"],
      ["objectPosition", "Object Position"],
      ["display", "Display"],
    ],

    avatar: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ["color", "Text Color"],
      ...COMMON_TEXT,
      ["objectFit", "Object Fit"],
    ],

    badge: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["display", "Display"],
      ...FLEX,
    ],

    tag: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["display", "Display"],
      ...FLEX,
    ],

    chip: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["display", "Display"],
      ...FLEX,
      ["cursor", "Cursor"],
    ],

    divider: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
    ],

    separator: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
    ],

    spacer: [
      ...COMMON_LAYOUT,
    ],

    tooltip: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["cursor", "Cursor"],
    ],

    spinner: [
      ...COMMON_LAYOUT,
      ["border", "Border"],
      ["borderTopColor", "Active Border Color"],
      ["borderRadius", "Border Radius"],
      ["animation", "Animation"],
    ],

    loader: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ["borderRadius", "Border Radius"],
      ["animation", "Animation"],
    ],

    progressBar: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ["borderRadius", "Border Radius"],
      ["overflow", "Overflow"],
    ],

    skeleton: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ["borderRadius", "Border Radius"],
      ["animation", "Animation"],
    ],

    input: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["outline", "Outline"],
    ],

    select: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...COMMON_TEXT,
      ["outline", "Outline"],
      ["cursor", "Cursor"],
    ],

    checkbox: [
      ...COMMON_LAYOUT,
      ["accentColor", "Accent Color"],
      ["cursor", "Cursor"],
    ],

    card: [
      ...COMMON_LAYOUT,
      ["background", "Background"],
      ...FLEX,
    ],
  };

  // =====================================================
  // DEFAULT CSS
  // =====================================================

  const FONT = "Inter, Segoe UI, Arial, sans-serif";

  const DEFAULT_CSS = {
    container: {
      width: "50%",
      height: "50%",
      background: "#FFFFFF",
      color: "#242424",
      padding: "16px",
      margin: "0px",
      border: "1px solid #E5E5E7",
      borderRadius: "12px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      gap: "8px",
      overflow: "visible",
      position: "relative",
      zIndex: "1",
    },

    button: {
      width: "auto",
      height: "40px",
      background: "#4C43E0",
      color: "#FFFFFF",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "normal",
      textAlign: "center",
      padding: "0px 16px",
      margin: "0px",
      border: "1px solid transparent",
      borderRadius: "8px",
      boxShadow: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0px",
      cursor: "pointer",
      opacity: "1",
      position: "relative",
      zIndex: "1",
    },

    text: {
      width: "auto",
      height: "auto",
      color: "#242424",
      background: "transparent",
      fontFamily: FONT,
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "normal",
      textAlign: "left",
      textTransform: "none",
      textDecoration: "none",
      padding: "0px",
      margin: "0px 0px 12px 0px",
      border: "none",
      borderRadius: "0px",
      boxShadow: "none",
      display: "block",
      position: "relative",
      zIndex: "1",
      opacity: "1",
    },

    heading: {
      width: "auto",
      height: "auto",
      color: "#242424",
      background: "transparent",
      fontFamily: FONT,
      fontSize: "24px",
      fontWeight: "650",
      lineHeight: "32px",
      letterSpacing: "-0.3px",
      textAlign: "left",
      padding: "0px",
      margin: "0px 0px 12px 0px",
      border: "none",
      display: "block",
      position: "relative",
    },

    paragraph: {
      width: "auto",
      height: "auto",
      color: "#616161",
      background: "transparent",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21px",
      letterSpacing: "normal",
      textAlign: "left",
      padding: "0px",
      margin: "0px 0px 12px 0px",
      border: "none",
      display: "block",
      position: "relative",
    },

    label: {
      width: "auto",
      height: "auto",
      color: "#333333",
      background: "transparent",
      fontFamily: FONT,
      fontSize: "13px",
      fontWeight: "600",
      lineHeight: "18px",
      textAlign: "left",
      padding: "0px",
      margin: "0px 0px 5px 0px",
      display: "block",
      position: "relative",
    },

    link: {
      width: "auto",
      height: "auto",
      color: "#4C43E0",
      background: "transparent",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      textAlign: "left",
      textDecoration: "none",
      padding: "0px",
      margin: "0px",
      display: "inline-block",
      cursor: "pointer",
      position: "relative",
    },

    iconButton: {
      width: "40px",
      height: "40px",
      background: "#FFFFFF",
      color: "#242424",
      fontFamily: FONT,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1",
      textAlign: "center",
      padding: "0px",
      margin: "0px",
      border: "1px solid #E5E5E7",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "relative",
    },

    icon: {
      width: "24px",
      height: "24px",
      color: "#242424",
      fontSize: "20px",
      lineHeight: "24px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },

    image: {
      width: "240px",
      height: "160px",
      border: "none",
      borderRadius: "8px",
      boxShadow: "none",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
      position: "relative",
    },

    avatar: {
      width: "40px",
      height: "40px",
      background: "#E8E7FF",
      color: "#4C43E0",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "40px",
      textAlign: "center",
      border: "none",
      borderRadius: "50%",
      objectFit: "cover",
      display: "inline-block",
    },

    badge: {
      width: "auto",
      height: "22px",
      background: "#E8E7FF",
      color: "#4C43E0",
      fontFamily: FONT,
      fontSize: "11px",
      fontWeight: "600",
      lineHeight: "16px",
      padding: "3px 8px",
      margin: "0px",
      border: "none",
      borderRadius: "999px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    tag: {
      width: "auto",
      height: "28px",
      background: "#F1F1F3",
      color: "#444444",
      fontFamily: FONT,
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      padding: "5px 10px",
      margin: "0px",
      border: "1px solid #E5E5E7",
      borderRadius: "6px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    chip: {
      width: "auto",
      height: "32px",
      background: "#FFFFFF",
      color: "#333333",
      fontFamily: FONT,
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "18px",
      padding: "6px 12px",
      margin: "0px",
      border: "1px solid #E0E0E3",
      borderRadius: "999px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      gap: "5px",
    },

    divider: {
      width: "100%",
      height: "1px",
      background: "#E5E5E7",
      margin: "12px 0px",
      padding: "0px",
      border: "none",
      display: "block",
    },

    separator: {
      width: "100%",
      height: "1px",
      background: "#E5E5E7",
      margin: "8px 0px",
      padding: "0px",
      border: "none",
      display: "block",
    },

    spacer: {
      width: "100%",
      height: "24px",
      minHeight: "24px",
      margin: "0px",
      padding: "0px",
      border: "none",
      display: "block",
    },

    tooltip: {
      width: "auto",
      height: "auto",
      background: "#242424",
      color: "#FFFFFF",
      fontFamily: FONT,
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
      textAlign: "center",
      padding: "6px 9px",
      margin: "0px",
      border: "none",
      borderRadius: "6px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.16)",
      display: "inline-block",
      cursor: "help",
      position: "relative",
    },

    spinner: {
      width: "28px",
      height: "28px",
      border: "3px solid #E5E5E7",
      borderTopColor: "#4C43E0",
      borderRadius: "50%",
      display: "inline-block",
      animation: "canvas-spin 0.8s linear infinite",
    },

    loader: {
      width: "80px",
      height: "4px",
      background: "#E5E5E7",
      borderRadius: "999px",
      display: "block",
      overflow: "hidden",
      position: "relative",
      animation: "canvas-loader 1.2s ease-in-out infinite",
    },

    progressBar: {
      width: "100%",
      height: "8px",
      background: "#E5E5E7",
      borderRadius: "999px",
      overflow: "hidden",
      display: "block",
      position: "relative",
    },

    skeleton: {
      width: "100%",
      height: "18px",
      background: "#E8E8EA",
      borderRadius: "5px",
      display: "block",
      animation: "canvas-skeleton 1.5s ease-in-out infinite",
    },

    input: {
      width: "100%",
      height: "40px",
      background: "#FFFFFF",
      color: "#242424",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      padding: "0px 12px",
      margin: "0px",
      border: "1px solid #D6D6DA",
      borderRadius: "8px",
      outline: "none",
      display: "block",
    },

    select: {
      width: "180px",
      height: "40px",
      background: "#FFFFFF",
      color: "#242424",
      fontFamily: FONT,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      padding: "0px 12px",
      margin: "0px",
      border: "1px solid #D6D6DA",
      borderRadius: "8px",
      outline: "none",
      cursor: "pointer",
      display: "block",
    },

    checkbox: {
      width: "18px",
      height: "18px",
      margin: "0px",
      padding: "0px",
      accentColor: "#4C43E0",
      cursor: "pointer",
      display: "inline-block",
    },

    card: {
      width: "100%",
      minHeight: "120px",
      background: "#FFFFFF",
      color: "#242424",
      padding: "16px",
      margin: "0px",
      border: "1px solid #E5E5E7",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      gap: "8px",
      position: "relative",
    },
  };

  // =====================================================
  // ID
  // =====================================================

  function createId() {
    return Date.now() + Math.random();
  }

  // =====================================================
  // OPEN CREATE WINDOW
  // =====================================================

  function openToolWindow(type) {
    setFormData({
      name: "",
      text: getDefaultText(type),
      width: type === "container" ? "50%" : "",
      height: type === "container" ? "50%" : "",
      src: "",
      href: "#",
    });

    setModal({
      open: true,
      type,
      mode: "create",
      itemId: null,
    });
  }

  function getDefaultText(type) {
    const values = {
      button: "Button",
      text: "Text",
      heading: "Heading",
      paragraph: "This is a paragraph.",
      label: "Label",
      link: "Learn more",
      iconButton: "＋",
      icon: "✦",
      avatar: "A",
      badge: "New",
      tag: "Tag",
      chip: "Chip",
      tooltip: "Tooltip",
      input: "",
      select: "",
      checkbox: "",
      card: "Card content",
      image: "",
    };

    return values[type] ?? "";
  }

  // =====================================================
  // OPEN COMPONENT EDITOR
  // =====================================================

  function openEditor(item) {
    setSelectedItem(item.id);

    setCssData({
      ...DEFAULT_CSS[item.type],
      ...(item.css || {}),
    });

    setNewCSSProperty("");
    setNewCSSValue("");

    setModal({
      open: true,
      type: item.type,
      mode: "css",
      itemId: item.id,
    });
  }

  function closeModal() {
    setModal({
      open: false,
      type: null,
      mode: null,
      itemId: null,
    });

    setNewCSSProperty("");
    setNewCSSValue("");
  }

  // =====================================================
  // FORM
  // =====================================================

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((old) => ({
      ...old,
      [name]: value,
    }));
  }

  // =====================================================
  // CONTENT EDITOR
  // =====================================================

  function supportsContent(type) {
    return [
      "button",
      "text",
      "heading",
      "paragraph",
      "label",
      "link",
      "iconButton",
      "icon",
      "avatar",
      "badge",
      "tag",
      "chip",
      "tooltip",
      "input",
      "select",
      "card",
    ].includes(type);
  }

  function findItemById(items, itemId) {
    for (const item of items) {
      if (item.id === itemId) {
        return item;
      }

      if (
        item.type === "container" &&
        item.children?.length
      ) {
        const found = findItemById(
          item.children,
          itemId
        );

        if (found) {
          return found;
        }
      }
    }

    return null;
  }

  function getSelectedItemContent() {
    const item = findItemById(
      tools,
      modal.itemId
    );

    return item?.text ?? "";
  }

  function updateItemContent(itemId, value) {
    setTools((oldTools) =>
      updateContentRecursive(
        oldTools,
        itemId,
        value
      )
    );
  }

  function updateContentRecursive(
    items,
    itemId,
    value
  ) {
    return items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          text: value,
        };
      }

      if (
        item.type === "container" &&
        item.children
      ) {
        return {
          ...item,
          children: updateContentRecursive(
            item.children,
            itemId,
            value
          ),
        };
      }

      return item;
    });
  }

  // =====================================================
  // CSS
  // =====================================================

  function handleCSSChange(property, value) {
    setCssData((old) => ({
      ...old,
      [property]: value,
    }));

    updateItemCSS(
      modal.itemId,
      property,
      value
    );
  }

  function addCustomCSS() {
    const property = newCSSProperty.trim();
    const value = newCSSValue.trim();

    if (!property || !value) return;

    const camelProperty = property.replace(
      /-([a-z])/g,
      (_, letter) =>
        letter.toUpperCase()
    );

    handleCSSChange(
      camelProperty,
      value
    );

    setNewCSSProperty("");
    setNewCSSValue("");
  }

  function updateItemCSS(
    itemId,
    property,
    value
  ) {
    setTools((oldTools) =>
      updateCSSRecursive(
        oldTools,
        itemId,
        property,
        value
      )
    );
  }

  function updateCSSRecursive(
    items,
    itemId,
    property,
    value
  ) {
    return items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          css: {
            ...(item.css || {}),
            [property]: value,
          },
        };
      }

      if (item.type === "container") {
        return {
          ...item,
          children: updateCSSRecursive(
            item.children || [],
            itemId,
            property,
            value
          ),
        };
      }

      return item;
    });
  }

  // =====================================================
  // ADD TO CONTAINER
  // =====================================================

  function addToContainer(
    items,
    containerId,
    newItem
  ) {
    return items.map((item) => {
      if (
        item.id === containerId &&
        item.type === "container"
      ) {
        return {
          ...item,
          children: [
            ...(item.children || []),
            newItem,
          ],
        };
      }

      if (item.type === "container") {
        return {
          ...item,
          children: addToContainer(
            item.children || [],
            containerId,
            newItem
          ),
        };
      }

      return item;
    });
  }

  function addItem(newItem) {
    if (selectedContainer !== null) {
      setTools((old) =>
        addToContainer(
          old,
          selectedContainer,
          newItem
        )
      );
    } else {
      setTools((old) => [
        ...old,
        newItem,
      ]);
    }
  }

  // =====================================================
  // CREATE COMPONENT
  // =====================================================

  function createConfiguredItem() {
    const type = modal.type;

    if (!type) return;

    const baseCSS = {
      ...(DEFAULT_CSS[type] ||
        DEFAULT_CSS.text),
    };

    const common = {
      id: createId(),
      type,
      name:
        formData.name.trim() ||
        `${getComponentLabel(
          type
        )} ${Date.now()}`,
      css: baseCSS,
    };

    if (type === "container") {
      addItem({
        ...common,
        children: [],
        css: {
          ...baseCSS,
          width:
            formData.width || "50%",
          height:
            formData.height || "50%",
        },
      });
    } else {
      addItem({
        ...common,
        text:
          formData.text.trim() ||
          getDefaultText(type),
        src:
          formData.src.trim() || "",
        href:
          formData.href.trim() || "#",
      });
    }

    closeModal();
  }

  function getComponentLabel(type) {
    return (
      COMPONENTS.find(
        (component) =>
          component.type === type
      )?.label || type
    );
  }

  // =====================================================
  // SELECT
  // =====================================================

  function selectItem(item) {
    setSelectedItem(item.id);

    if (item.type === "container") {
      setSelectedContainer(
        (current) =>
          current === item.id
            ? null
            : item.id
      );
    } else {
      setSelectedContainer(null);
    }
  }

  // =====================================================
  // TREE
  // =====================================================

  function renderTree(
    items,
    level = 0
  ) {
    return items.map((item) => (
      <div key={item.id}>
        <div
          className={`tree-item ${
            selectedItem === item.id
              ? "selected-container"
              : ""
          }`}
          style={{
            paddingLeft:
              `${10 + level * 20}px`,
          }}
          onClick={() =>
            selectItem(item)
          }
        >
          <div className="tree-name">
            <span className="tree-icon">
              {getTreeIcon(item.type)}
            </span>

            {item.name}
          </div>

          {selectedItem === item.id && (
            <button
              className="layer-arrow"
              onClick={(event) => {
                event.stopPropagation();
                openEditor(item);
              }}
            >
              →
            </button>
          )}
        </div>

        {item.type === "container" &&
          item.children?.length > 0 &&
          renderTree(
            item.children,
            level + 1
          )}
      </div>
    ));
  }

  function getTreeIcon(type) {
    const found =
      COMPONENTS.find(
        (component) =>
          component.type === type
      );

    return found?.icon || "•";
  }

  // =====================================================
  // CLASS SYSTEM
  // =====================================================

  function camelToCSS(property) {
    return property.replace(
      /[A-Z]/g,
      (letter) =>
        `-${letter.toLowerCase()}`
    );
  }

  function getCSSSignature(css = {}) {
    return Object.entries(css)
      .sort(([a], [b]) =>
        a.localeCompare(b)
      )
      .map(
        ([property, value]) =>
          `${property}:${value}`
      )
      .join("|");
  }

  function flattenItems(items) {
    let result = [];

    items.forEach((item) => {
      result.push(item);

      if (
        item.type === "container" &&
        item.children
      ) {
        result = [
          ...result,
          ...flattenItems(
            item.children
          ),
        ];
      }
    });

    return result;
  }

  function buildClassMap() {
    const allItems =
      flattenItems(tools);

    const map = {};
    const counters = {};
    const signatures = {};

    COMPONENTS.forEach(
      (component) => {
        counters[component.type] = 0;
        signatures[
          component.type
        ] = {};
      }
    );

    allItems.forEach((item) => {
      if (!item.css) return;

      const type = item.type;

      if (!signatures[type]) {
        signatures[type] = {};
        counters[type] = 0;
      }

      const signature =
        getCSSSignature(
          item.css
        );

      if (
        signatures[type][signature]
      ) {
        map[item.id] =
          signatures[type][signature];
        return;
      }

      counters[type]++;

      const baseName =
        `canvas-${type
          .replace(
            /([A-Z])/g,
            "-$1"
          )
          .toLowerCase()}`;

      const className =
        counters[type] === 1
          ? baseName
          : `${baseName}-${counters[type]}`;

      signatures[type][signature] =
        className;

      map[item.id] =
        className;
    });

    return map;
  }

  // =====================================================
  // GENERATED CSS
  // =====================================================

  function generateCSSCode() {
    const allItems =
      flattenItems(tools);

    const classMap =
      buildClassMap();

    const generated = {};

    allItems.forEach((item) => {
      if (!item.css) return;

      const className =
        classMap[item.id];

      if (!className) return;

      if (generated[className])
        return;

      generated[className] =
        item.css;
    });

    let css = "";

    Object.entries(
      generated
    ).forEach(
      ([className, styles]) => {
        css += `.${className} {\n`;

        Object.entries(
          styles
        ).forEach(
          ([property, value]) => {
            if (
              value === "" ||
              value === undefined
            ) {
              return;
            }

            css +=
              `  ${camelToCSS(property)}: ${value};\n`;
          }
        );

        css += "}\n\n";
      }
    );

    if (
      allItems.some(
        (item) =>
          item.type === "spinner"
      )
    ) {
      css +=
`@keyframes canvas-spin {
  to {
    transform: rotate(360deg);
  }
}

`;
    }

    if (
      allItems.some(
        (item) =>
          item.type === "loader"
      )
    ) {
      css +=
`@keyframes canvas-loader {
  0% {
    transform: scaleX(0.35);
    transform-origin: left;
  }

  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  100% {
    transform: scaleX(0.35);
    transform-origin: right;
  }
}

`;
    }

    if (
      allItems.some(
        (item) =>
          item.type === "skeleton"
      )
    ) {
      css +=
`@keyframes canvas-skeleton {
  0%, 100% {
    opacity: 0.55;
  }

  50% {
    opacity: 1;
  }
}

`;
    }

    return css;
  }

  // =====================================================
  // GENERATED JSX
  // =====================================================

  function generateCanvasCode(
    items,
    level = 0,
    classMap = buildClassMap()
  ) {
    let code = "";
    const space =
      "  ".repeat(level);

    items.forEach((item) => {
      const className =
        classMap[item.id];

      if (!className) return;

      const key =
        `key="${item.id}"`;

      switch (item.type) {
        case "container":
          code +=
`${space}<div className="${className}" ${key}>
`;

          code +=
`${space}  <div className="container-title">
`;


          code +=
`${space}  </div>
`;

          if (
            item.children?.length
          ) {
            code +=
`${space}  <div className="container-children">
`;

            code +=
              generateCanvasCode(
                item.children,
                level + 2,
                classMap
              );

            code +=
`${space}  </div>
`;
          }

          code +=
`${space}</div>

`;
          break;

        case "button":
          code +=
`${space}<button className="${className}" ${key}>
${space}  ${item.text}
${space}</button>

`;
          break;

        case "iconButton":
          code +=
`${space}<button className="${className}" ${key} aria-label="${item.name}">
${space}  ${item.text}
${space}</button>

`;
          break;

        case "link":
          code +=
`${space}<a className="${className}" href="${item.href || "#"}" ${key}>
${space}  ${item.text}
${space}</a>

`;
          break;

        case "text":
          code +=
`${space}<p className="${className}" ${key}>
${space}  ${item.text}
${space}</p>

`;
          break;

        case "heading":
          code +=
`${space}<h2 className="${className}" ${key}>
${space}  ${item.text}
${space}</h2>

`;
          break;

        case "paragraph":
          code +=
`${space}<p className="${className}" ${key}>
${space}  ${item.text}
${space}</p>

`;
          break;

        case "label":
          code +=
`${space}<label className="${className}" ${key}>
${space}  ${item.text}
${space}</label>

`;
          break;

        case "icon":
          code +=
`${space}<span className="${className}" ${key} aria-hidden="true">
${space}  ${item.text}
${space}</span>

`;
          break;

        case "image":
          code +=
`${space}<img className="${className}" src="${item.src || "https://via.placeholder.com/240x160"}" alt="${item.name}" ${key} />

`;
          break;

        case "avatar":
          code +=
`${space}<div className="${className}" ${key}>
${space}  ${item.text}
${space}</div>

`;
          break;

        case "badge":
        case "tag":
        case "chip":
          code +=
`${space}<span className="${className}" ${key}>
${space}  ${item.text}
${space}</span>

`;
          break;

        case "divider":
        case "separator":
          code +=
`${space}<div className="${className}" ${key} role="separator" />

`;
          break;

        case "spacer":
          code +=
`${space}<div className="${className}" ${key} aria-hidden="true" />

`;
          break;

        case "tooltip":
          code +=
`${space}<span className="${className}" ${key} title="${item.text}">
${space}  ${item.text}
${space}</span>

`;
          break;

        case "spinner":
          code +=
`${space}<span className="${className}" ${key} role="status" aria-label="Loading" />

`;
          break;

        case "loader":
          code +=
`${space}<div className="${className}" ${key} role="progressbar" />

`;
          break;

        case "progressBar":
          code +=
`${space}<div className="${className}" ${key} role="progressbar">
${space}  <div className="canvas-progress-value" />
${space}</div>

`;
          break;

        case "skeleton":
          code +=
`${space}<div className="${className}" ${key} aria-hidden="true" />

`;
          break;

        case "input":
          code +=
`${space}<input className="${className}" placeholder="${item.text}" ${key} />

`;
          break;

        case "select":
          code +=
`${space}<select className="${className}" ${key}>
${space}  <option>${item.text || "Select an option"}</option>
${space}</select>

`;
          break;

        case "checkbox":
          code +=
`${space}<input type="checkbox" className="${className}" ${key} />

`;
          break;

        case "card":
          code +=
`${space}<div className="${className}" ${key}>
${space}  ${item.text}
${space}</div>

`;
          break;

        default:
          break;
      }
    });

    return code;
  }

  const classMap =
    buildClassMap();

  const canvasCode =
    generateCanvasCode(
      tools,
      0,
      classMap
    );

  const cssCode =
    generateCSSCode();

  // =====================================================
  // MODAL TITLE
  // =====================================================

  function getModalTitle() {
    if (modal.mode === "css") {
      return `${getComponentLabel(
        modal.type
      )} Editor`;
    }

    return `Create ${getComponentLabel(
      modal.type
    )}`;
  }

  // =====================================================
  // TOOL GROUPS
  // =====================================================

  const primaryComponents =
    COMPONENTS.slice(0, 4);

  const secondaryComponents =
    COMPONENTS.slice(4);

  // =====================================================
  // APP
  // =====================================================

  return (
    <div className="body">

      {/* =================================================
          WORK AREA
          ================================================= */}

      <div className="work">

        {/* =================================================
            LEFT
            ================================================= */}

        <div className="left-section">

          <h2>Tools</h2>

          <div className="tool-layout">

            <div className="tool-group primary-tools">

              {primaryComponents.map(
                (component) => (
                  <button
                    key={component.type}
                    className="component-tool-button"
                    onClick={() =>
                      openToolWindow(
                        component.type
                      )
                    }
                  >
                    <span className="component-tool-icon">
                      {component.icon}
                    </span>

                    <span>
                      {component.label}
                    </span>
                  </button>
                )
              )}

            </div>

            {showMoreTools && (
              <div
                className="tool-group secondary-tools"
                id="secondary-tools"
              >

                {secondaryComponents.map(
                  (component) => (
                    <button
                      key={component.type}
                      className="component-tool-button"
                      onClick={() =>
                        openToolWindow(
                          component.type
                        )
                      }
                    >
                      <span className="component-tool-icon">
                        {component.icon}
                      </span>

                      <span>
                        {component.label}
                      </span>
                    </button>
                  )
                )}

              </div>
            )}

            <button
              className="more-tools-button"
              onClick={() => {

                setShowMoreTools(
                  (value) => !value
                );

                if (!showMoreTools) {
                  setTimeout(() => {

                    document
                      .getElementById(
                        "secondary-tools"
                      )
                      ?.scrollIntoView({
                        behavior:
                          "smooth",
                        block:
                          "nearest",
                      });

                  }, 50);
                }

              }}
            >
              {showMoreTools
                ? "↑ Show less"
                : "→ More components"}
            </button>

          </div>

          {/* =================================================
              LAYERS
              ================================================= */}

          <div className="layer-panel">

            <h3>Layers</h3>

            {tools.length === 0 && (
              <p className="empty-layers">
                No elements yet
              </p>
            )}

            {renderTree(tools)}

          </div>

          <div className="selection-info">

            {selectedContainer !== null
              ? "New elements will be added inside the selected container."
              : "New elements will be added to the main canvas."
            }

          </div>

        </div>

        {/* =================================================
            CANVAS
            ================================================= */}

        <div className="right-section">

          <Canva
            tools={tools}
            classMap={classMap}
          />

        </div>

      </div>

      {/* =================================================
          CODE AREA
          ================================================= */}

      <div className="code">

        <div className="code-header">
          <h2>Generated Code</h2>
          <span>React + CSS</span>
        </div>

        <div className="code-split">

          <div className="code-panel">

            <div className="code-panel-header">
              <span>canva.js</span>

              <span className="code-type">
                React JSX
              </span>
            </div>

            <div className="code-content">

              <pre>
                <code>
{canvasCode ||
`// Add elements to the canvas.

// React JSX will appear here.`}
                </code>
              </pre>

            </div>

          </div>

          <div className="code-panel">

            <div className="code-panel-header">
              <span>App.css</span>

              <span className="code-type">
                CSS
              </span>
            </div>

            <div className="code-content">

              <pre>
                <code>
{cssCode ||
`/* CSS will appear here when
   elements are added. */`}
                </code>
              </pre>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          MODAL
          ================================================= */}

      {modal.open && (

        <div
          className="modal-overlay"
          onClick={closeModal}
        >

          <div
            className="tool-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                {getModalTitle()}
              </h2>

              <button
                className="modal-close"
                onClick={closeModal}
              >
                ×
              </button>

            </div>

            {/* =================================================
                COMPONENT EDITOR
                ================================================= */}

            {modal.mode === "css" && (

              <div className="css-editor">

                <div className="css-editor-info">

                  <strong>
                    {getComponentLabel(
                      modal.type
                    )}
                  </strong>

                  <span>
                    Changes are applied immediately.
                  </span>

                </div>

                {/* =================================================
                    CONTENT EDITOR
                    ================================================= */}

                {supportsContent(
                  modal.type
                ) && (

                  <div className="component-content-editor">

                    <div className="content-editor-title">

                      <strong>
                        Content
                      </strong>

                      <span>
                        Edit the text/content inside this component.
                      </span>

                    </div>

                    {[
                      "paragraph",
                      "text",
                      "card",
                    ].includes(
                      modal.type
                    ) ? (

                      <textarea
                        value={
                          getSelectedItemContent()
                        }
                        onChange={(event) =>
                          updateItemContent(
                            modal.itemId,
                            event.target.value
                          )
                        }
                        placeholder="Enter component content..."
                        rows="4"
                      />

                    ) : (

                      <input
                        type="text"
                        value={
                          getSelectedItemContent()
                        }
                        onChange={(event) =>
                          updateItemContent(
                            modal.itemId,
                            event.target.value
                          )
                        }
                        placeholder="Enter component content..."
                      />

                    )}

                  </div>

                )}

                {/* =================================================
                    CSS FIELDS
                    ================================================= */}

                {CSS_FIELDS[
                  modal.type
                ]?.map(
                  ([property, label]) => (

                    <div
                      className="css-field"
                      key={property}
                    >

                      <label>
                        {label}
                      </label>

                      <input
                        type="text"
                        value={
                          cssData[
                            property
                          ] ?? ""
                        }
                        onChange={(event) =>
                          handleCSSChange(
                            property,
                            event.target.value
                          )
                        }
                      />

                    </div>

                  )
                )}

                {/* =================================================
                    CUSTOM CSS
                    ================================================= */}

                <div className="custom-css-section">

                  <div className="custom-css-title">

                    <strong>
                      Custom CSS
                    </strong>

                    <span>
                      Add any CSS property
                    </span>

                  </div>

                  <div className="custom-css-row">

                    <input
                      type="text"
                      value={
                        newCSSProperty
                      }
                      onChange={(event) =>
                        setNewCSSProperty(
                          event.target.value
                        )
                      }
                      placeholder="property"
                    />

                    <input
                      type="text"
                      value={
                        newCSSValue
                      }
                      onChange={(event) =>
                        setNewCSSValue(
                          event.target.value
                        )
                      }
                      placeholder="value"
                    />

                    <button
                      className="add-css-button"
                      onClick={
                        addCustomCSS
                      }
                    >
                      Add
                    </button>

                  </div>

                  <div className="custom-css-example">

                    Example:
                    {" "}
                    <code>
                      transform
                    </code>
                    {" "}
                    <code>
                      scale(1.1)
                    </code>

                  </div>

                </div>

              </div>

            )}

            {/* =================================================
                CREATE
                ================================================= */}

            {modal.mode === "create" && (

              <div className="modal-body">

                {modal.type ===
                  "container" && (
                  <>

                    <label>
                      Container name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="Example: Header"
                    />

                    <label>
                      Width
                    </label>

                    <input
                      type="text"
                      name="width"
                      value={
                        formData.width
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="50%, 300px, auto"
                    />

                    <label>
                      Height
                    </label>

                    <input
                      type="text"
                      name="height"
                      value={
                        formData.height
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="50%, 300px, auto"
                    />

                  </>
                )}

                {modal.type !==
                  "container" && (
                  <>

                    <label>
                      {getComponentLabel(
                        modal.type
                      )} name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder={
                        `Example: My ${getComponentLabel(
                          modal.type
                        )}`
                      }
                    />

                  </>
                )}

                {[
                  "button",
                  "iconButton",
                  "text",
                  "heading",
                  "paragraph",
                  "label",
                  "link",
                  "icon",
                  "avatar",
                  "badge",
                  "tag",
                  "chip",
                  "tooltip",
                  "input",
                  "select",
                  "card",
                ].includes(
                  modal.type
                ) && (
                  <>

                    <label>

                      {[
                        "heading",
                        "paragraph",
                        "text",
                        "card",
                      ].includes(
                        modal.type
                      )
                        ? "Content"
                        : "Text / Content"}

                    </label>

                    {[
                      "paragraph",
                      "text",
                      "card",
                    ].includes(
                      modal.type
                    ) ? (

                      <textarea
                        name="text"
                        value={
                          formData.text
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder="Write your content..."
                        rows="4"
                      />

                    ) : (

                      <input
                        type="text"
                        name="text"
                        value={
                          formData.text
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder={
                          getDefaultText(
                            modal.type
                          )
                        }
                      />

                    )}

                  </>
                )}

                {modal.type ===
                  "image" && (
                  <>

                    <label>
                      Image URL
                    </label>

                    <input
                      type="text"
                      name="src"
                      value={
                        formData.src
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="https://example.com/image.jpg"
                    />

                  </>
                )}

                {modal.type ===
                  "link" && (
                  <>

                    <label>
                      Link URL
                    </label>

                    <input
                      type="text"
                      name="href"
                      value={
                        formData.href
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="https://example.com"
                    />

                  </>
                )}

              </div>

            )}

            {/* =================================================
                FOOTER
                ================================================= */}

            <div className="modal-footer">

              <button
                className="cancel-button"
                onClick={closeModal}
              >
                {modal.mode === "css"
                  ? "Close"
                  : "Cancel"}
              </button>

              {modal.mode ===
                "create" && (

                <button
                  className="create-button"
                  onClick={
                    createConfiguredItem
                  }
                >
                  Create
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
