from random import randint
import pygame as pg
from sys import exit
from tkinter import Tk
import ctypes as ct
import time

DEBUG = False
FULLSCREEN = False
RUNNING = True
screen_width, screen_height = Tk().winfo_screenwidth(), Tk().winfo_screenheight()
res = (screen_width, screen_height) if FULLSCREEN else (1200, 800)
mid_screen = (res[0] // 2, res[1] // 2)

pg.init()
screen = pg.display.set_mode(res, pg.FULLSCREEN) if FULLSCREEN else pg.display.set_mode(res)
pg.display.set_caption('Monke Crash')
clock = pg.time.Clock()
pg.mouse.set_visible(False)


class Rocket(pg.sprite.Sprite):
    def __init__(self):
        super().__init__()
        rocket1 = pg.image.load('Image/mrocket1.png').convert_alpha()
        rocket2 = pg.image.load('Image/mrocket2.png').convert_alpha()
        rocket3 = pg.image.load('Image/mrocket3.png').convert_alpha()
        self.rocket_anim = [rocket1,rocket2,rocket3]
        self.rocket_index = 0
        self.move_x = 3
        self.move_y = -1

        self.image = self.rocket_anim[self.rocket_index]
        self.rect = self.image.get_rect(bottomleft=(0,res[1]-200))

    def movement(self):
        if self.move_x > 0:
            if self.rect.right-20 > res[0]:
                self.move_x = 0
        if self.move_y != 0:
            if self.rect.top < 0:
                self.move_y = 0

    def apply_position(self):
        if mou[0]:
            self.rect.center = pg.mouse.get_pos()
        #print(self.rect.center)
        self.movement()
        self.rect.bottomleft = self.rect.left+self.move_x, self.rect.bottom+self.move_y

    def animation_state(self):
        self.rocket_index += 0.01
        if self.rocket_index >= len(self.rocket_anim): self.rocket_index = 0
        self.image = self.rocket_anim[int(self.rocket_index)]

    def update(self):
        self.apply_position()
        self.animation_state()

class Courbe():
    def __init__(self):
        self.rect = pg.Rect(0,0,res[0]-10,res[1]-10)
        self.color = "#c9204d"
        self.angle = -0.1
        self.rect.bottomleft = 0, res[1]

    def update(self):
        self.rect.height = res[1]*2-rocket.sprite.rect.center[1]*2.2-150
        self.rect.width = rocket.sprite.rect.center[0]*2
        self.rect.midbottom = (0, res[1]-150)
        pg.draw.arc(screen, self.color, self.rect, 4.71, self.angle, 5)


def dark_bar():
    DWMWA_USE_IMMERSIVE_DARK_MODE = 20
    set_window_attribute = ct.windll.dwmapi.DwmSetWindowAttribute
    hwnd = pg.display.get_wm_info()["window"]
    rendering_policy = DWMWA_USE_IMMERSIVE_DARK_MODE
    value = 2
    value = ct.c_int(value)
    set_window_attribute(hwnd, rendering_policy, ct.byref(value),ct.sizeof(value))
    pg.display.set_mode((1,1))
    pg.display.set_mode(res)

"""Font en cas de besoin"""
# font = pg.font.Font("sprite/font/Pixeltype.ttf", 100)
# score_text = font.render(str(score), False, 'white')
# score_rect = score_text.get_rect(center=mid_screen)

dark_bar()

rocket = pg.sprite.GroupSingle()
rocket.add(Rocket())

courbe = Courbe()

while True:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            pg.quit()
            exit()

    mou = pg.mouse.get_pressed()
    screen.fill((40,40,40))
    courbe.update()

    rocket.draw(screen)
    rocket.update()

    pg.display.update()
    clock.tick(30)