import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function VegetableMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Vegetables</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Bok Choy</MenubarItem>
          <MenubarItem>Spinach</MenubarItem>
          <MenubarItem>Kale</MenubarItem>
          <MenubarItem>Carrots</MenubarItem>
          <MenubarItem>Broccoli</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
