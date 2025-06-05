import pygame
import random

# Khởi tạo Pygame
pygame.init()

WIDTH = 600
HEIGHT = 400
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Rùa Ăn Sao")

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

rua_image = pygame.image.load("turtle.png").convert_alpha() 
rua_image = pygame.transform.scale(rua_image, (40, 40))   
star_image = pygame.image.load("star.png").convert_alpha()  
star_image = pygame.transform.scale(star_image, (40, 40)) 

# Thiết lập rùa
rua_width = rua_image.get_width()
rua_height = rua_image.get_height()
rua_x = WIDTH // 2 - rua_width // 2
rua_y = HEIGHT // 2 - rua_height // 2
MOVE_SPEED = 5

# Thiết lập ngôi sao
star_x = random.randint(0, WIDTH - star_image.get_width())
star_y = random.randint(0, HEIGHT - star_image.get_height())

# Điểm số
score = 0
font = pygame.font.Font(None, 36)

# Vòng lặp game
running = True
clock = pygame.time.Clock()

while running:
    # Xử lý sự kiện
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # Nhấn X để thoát
            running = False

    # Di chuyển rùa bằng phím
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        rua_x -= MOVE_SPEED
    if keys[pygame.K_RIGHT]:
        rua_x += MOVE_SPEED
    if keys[pygame.K_UP]:
        rua_y -= MOVE_SPEED
    if keys[pygame.K_DOWN]:
        rua_y += MOVE_SPEED

    # Giới hạn rùa trong màn hình
    if rua_x < 0:
        rua_x = 0
    if rua_x > WIDTH - rua_width:
        rua_x = WIDTH - rua_width
    if rua_y < 0:
        rua_y = 0
    if rua_y > HEIGHT - rua_height:
        rua_y = HEIGHT - rua_height

    rua_rect = pygame.Rect(rua_x, rua_y, rua_width, rua_height)
    star_rect = pygame.Rect(star_x, star_y, star_image.get_width(), star_image.get_height())
    if rua_rect.colliderect(star_rect):
        score += 1
        star_x = random.randint(0, WIDTH - star_image.get_width())
        star_y = random.randint(0, HEIGHT - star_image.get_height())

    # Vẽ mọi thứ
    screen.fill(WHITE)
    screen.blit(rua_image, (rua_x, rua_y))
    screen.blit(star_image, (star_x, star_y))
    score_text = font.render(f"Point: {score}", True, BLACK)
    screen.blit(score_text, (10, 10))

    # Cập nhật màn hình
    pygame.display.flip()
    clock.tick(60)

pygame.quit()